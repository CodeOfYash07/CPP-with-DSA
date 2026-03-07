const express = require("express");
const session = require("express-session");
const app = express();
require("./config/db");
const Product = require("./models/Product");
const UserAuth = require("./models/UserAuth");
const bcrypt = require("bcryptjs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.set("view engine", "ejs");

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// Seed the admin user
(async () => {
    const existingUser = await UserAuth.findOne({ email: "jhon@test.in" });
    if (!existingUser) {
        const hashedPassword = await bcrypt.hash("12345", 10);
        await UserAuth.create({
            name: "jhon",
            email: "jhon@test.in",
            phone: "1234567890",
            password: hashedPassword,
            canDelete: true,  // Allow deletion
            created_date: new Date().toLocaleString(),
            updated_date: new Date().toLocaleString()
        });
        console.log("Admin user created");
    }
})();

// Seed sample products
(async () => {
    const productCount = await Product.countDocuments();
    if (productCount === 0) {
        await Product.create([
            {
                name: "Laptop",
                category: "Electronics",
                price: 999.99,
                stock: 50,
                description: "High-performance laptop for work and gaming",
                created_date: new Date().toLocaleString(),
                updated_date: new Date().toLocaleString()
            },
            {
                name: "Wireless Headphones",
                category: "Electronics",
                price: 199.99,
                stock: 100,
                description: "Noise-cancelling wireless headphones",
                created_date: new Date().toLocaleString(),
                updated_date: new Date().toLocaleString()
            },
            {
                name: "Coffee Maker",
                category: "Appliances",
                price: 79.99,
                stock: 30,
                description: "Automatic coffee maker with timer",
                created_date: new Date().toLocaleString(),
                updated_date: new Date().toLocaleString()
            }
        ]);
        console.log("Sample products created");
    }
})();

const productRoutes = require("./routes/productRoutes");
app.use("/", productRoutes);

app.listen(8580, () => {
    console.log("Server Started at 8580");
});