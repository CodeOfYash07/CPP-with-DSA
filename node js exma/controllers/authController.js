const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if(!name || !email || !password) {
        return res.status(400).json({ message: "all fields are required" });
    }

    let existingUser = await User.findOne({ email });
    if(existingUser) {
        return res.status(400).json({ message: "email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const createdUser = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    let token = jwt.sign({ id: createdUser._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.status(201).json({
        user: createdUser,
        token: token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let oldUser = await User.findOne({ email });

    if (!oldUser) {
      return res.status(400).json({ message: "user not found" });
    }

    const checkPass = await bcrypt.compare(password, oldUser.password);
    if (!checkPass) {
        return res.status(400).json({ message: "wrong password" });
    }

    let token = jwt.sign({ id: oldUser._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.json({
        user: oldUser,
        token: token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};
