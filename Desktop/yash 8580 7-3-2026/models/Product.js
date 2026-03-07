const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    stock: Number,
    description: String,
    image: String,
    canDelete: {
        type: Boolean,
        default: true
    },
    status: {
        type: Boolean,
        default: true
    },
    created_date: String,
    updated_date: String
});

module.exports = mongoose.model("Product", productSchema);