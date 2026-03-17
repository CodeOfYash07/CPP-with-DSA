const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  try {
    let myToken = req.headers.authorization;
    if(myToken && myToken.startsWith('Bearer')) {
        let token = myToken.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } else {
        res.status(401).json({ msg: "Not authorized" });
    }
  } catch(e) {
      console.log(e);
      res.status(401).json({ msg: "token is not valid" });
  }
};

module.exports = { protect };
