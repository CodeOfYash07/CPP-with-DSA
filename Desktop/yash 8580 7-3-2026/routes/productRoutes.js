const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

const requireLogin = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }
};

router.get("/login", productController.loginForm);
router.post("/login", productController.login);
router.get("/logout", productController.logout);

router.get("/", requireLogin, productController.list);
router.get("/create", requireLogin, productController.createForm);
router.post("/create", requireLogin, upload.single("image"), productController.create);
router.get("/edit/:id", requireLogin, productController.editForm);
router.post("/update/:id", requireLogin, upload.single("image"), productController.update);
router.get("/delete/:id", requireLogin, productController.softDelete);
router.post("/multi-delete", requireLogin, productController.multiDelete);

module.exports = router;