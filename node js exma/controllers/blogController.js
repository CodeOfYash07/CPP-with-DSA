const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    if (!title || !content || !category) {
        return res.status(400).json({ message: "title, content, and category are required" });
    }

    const newBlog = new Blog({
        ...req.body,
        authorId: req.user._id
    })
    
    let saved = await newBlog.save();
    res.status(201).json(saved);
  } catch (err) {
      console.log(err);
      res.status(500).json({ message: "server error" });
  }
};

exports.getAllBlogs = async (req, res) => {
  try {
    let filter = { isDeleted: false, authorId: req.user._id };
    
    if (req.query.category) {
        filter.category = req.query.category;
    }
    
    if (req.query.status) {
        filter.isPublished = req.query.status === 'published';
    }

    let sortOption = { createdAt: -1 }; 
    if (req.query.sort == 'oldest') sortOption = { createdAt: 1 };
    
    let allBlogs = await Blog.find(filter).sort(sortOption);
    res.json(allBlogs);

  } catch (err) {
      res.status(500).json({ message: "error getting blogs" });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    let singleBlog = await Blog.findById(req.params.id);
    if(singleBlog && !singleBlog.isDeleted && singleBlog.authorId.toString() === req.user._id.toString()) {
        res.json(singleBlog);
    } else {
        res.status(404).json({ message: "blog not found" });
    }
  } catch (err) {
      res.status(500).json({ message: "server error" });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id);
    if (!blog || blog.isDeleted) {
        return res.status(404).json({ message: "blog not found" });
    }

    if (blog.authorId.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: "unauthorized" });
    }

    let updated = await Blog.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updated);

  } catch (err) {
      res.status(500).json({ message: "error updating" });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id);
    if (!blog || blog.isDeleted) {
        return res.status(404).json({ message: "blog not found" });
    }

    if (blog.authorId.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: "unauthorized" });
    }

    blog.isDeleted = true;
    await blog.save();
    
    res.json({message: "blog soft deleted successfully"});

  } catch (err) {
      res.status(500).json({ message: "error deleting" });
  }
};
