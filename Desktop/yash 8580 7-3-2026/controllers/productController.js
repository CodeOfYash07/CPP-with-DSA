const Product = require("../models/Product");
const UserAuth = require("../models/UserAuth");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

exports.list = async (req, res) => {
    let search = req.query.search || "";
    let limit = parseInt(req.query.limit) || 5;
    let page = parseInt(req.query.page) || 1;
    let skip = (page - 1) * limit;

    let query = {
        status: true,
        $or: [
            { name: { $regex: search, $options: "i" } },
            { category: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } }
        ]
    };

    const total = await Product.countDocuments(query);
    const products = await Product.find(query).skip(skip).limit(limit);
    const totalPages = Math.ceil(total / limit);

    res.render("index", { products, total, page, limit, search, totalPages });
};

exports.createForm = (req, res) => {
    // render empty form for a new product
    res.render("form", { product: null, errors: null });
};

exports.create = [
    body("name").notEmpty().withMessage("Product name is required"),
    body("category").notEmpty().withMessage("Category is required"),
    body("price").isFloat({ min: 0 }).withMessage("Valid price is required"),
    body("stock").isInt({ min: 0 }).withMessage("Valid stock quantity is required"),
    body("description").notEmpty().withMessage("Description is required"),
    
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render("form", { product: null, errors: errors.array() });
        }

        await Product.create({
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            stock: req.body.stock,
            description: req.body.description,
            image: req.file ? req.file.filename : "",
            canDelete: true,
            created_date: new Date().toLocaleString(),
            updated_date: new Date().toLocaleString()
        });
        res.redirect("/");
    }
];

exports.editForm = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render("form", { product, errors: null });
};

exports.update = [
    body("name").notEmpty().withMessage("Product name is required"),
    body("category").notEmpty().withMessage("Category is required"),
    body("price").isFloat({ min: 0 }).withMessage("Valid price is required"),
    body("stock").isInt({ min: 0 }).withMessage("Valid stock quantity is required"),
    body("description").notEmpty().withMessage("Description is required"),
    
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const product = await Product.findById(req.params.id);
            return res.render("form", { product, errors: errors.array() });
        }

        const updateData = {
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            stock: req.body.stock,
            description: req.body.description,
            updated_date: new Date().toLocaleString()
        };

        if (req.file) {
            updateData.image = req.file.filename;
        }

        await Product.findByIdAndUpdate(req.params.id, updateData);
        res.redirect("/");
    }
];

exports.softDelete = async (req, res) => {
    try {
        console.log("Delete request for ID:", req.params.id);
        const product = await Product.findById(req.params.id);
        console.log("Product found:", product ? "Yes" : "No");
        if (product) {
            console.log("Can delete:", product.canDelete);
            if (product.canDelete !== false) {
                await Product.findByIdAndUpdate(req.params.id, { status: false });
                console.log(`Product ${req.params.id} deleted successfully`);
            } else {
                console.log(`Product ${req.params.id} cannot be deleted`);
            }
        }
        res.redirect("/");
    } catch (error) {
        console.error("Delete error:", error);
        res.redirect("/");
    }
};
exports.multiDelete = async (req, res) => {
    try {
        let ids = req.body.ids;
        console.log("Multi-delete request for IDs:", ids);
        if (ids && ids.length > 0) {
            await Product.updateMany({ _id: { $in: ids }, canDelete: { $ne: false } }, { status: false });
            console.log(`Multiple products deleted: ${ids.length} items`);
        }
        res.redirect("/");
    } catch (error) {
        console.error("Multi-delete error:", error);
        res.redirect("/");
    }
};

exports.loginForm = (req, res) => {
    res.render("login", { error: null });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    
    // Check UserAuth for admin users
    const user = await UserAuth.findOne({ email, status: true });
    
    if (user && user.password && await bcrypt.compare(password, user.password)) {
        req.session.user = user;
        res.redirect("/");
    } else {
        res.render("login", { error: "Invalid email or password" });
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect("/login");
};