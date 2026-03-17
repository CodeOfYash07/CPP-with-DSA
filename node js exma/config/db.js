const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect(process.env.MONGODB).then(() => {
    console.log("mongoose connected properly");
  }).catch((err) => {
    console.log("err in db connection", err);
  })
};

module.exports = connectDB;
