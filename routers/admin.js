const express = require('express');
const router = express.Router();
const multer = require("multer")
const app = express();
// const upload = multer({ dest: "../public/data/upload/"})
const upload = multer({ dest: "upload"})

const productControllers = require('../contronllers/admin/ProductControllers');
const categoriController = require("../contronllers/admin/CategoriControllers");
const userController = require("../contronllers/admin/UserControllers");
const loginController = require("../contronllers/admin/LoginControllers")

// GET => Lấy giao diện
router.get("/", (req, res) => {
    res.render("admin/home.ejs")
})


// /*********************************  LOGIN  ******************************************* */
router.post('/login',loginController.loginUser);

// /**************************************************************************** */




// /****************************** PRODUCT ************************************ */

router.get("/products", productControllers.getProducts);
router.get("/add-products", productControllers.getAddProducts);
router.get("/edit-products/:id", productControllers.getEditProducts);

router.post("/edit-products/:id", upload.single("image"), productControllers.updateProducts);
router.post("/add-products", upload.single("image"), productControllers.postProducts);

router.delete("/delete-products/:id", productControllers.deleteProducts);

// /**************************************************************************** */


// /****************************** CATEGORI ************************************ */
router.get("/categori", categoriController.getCategories);
router.get("/add-categori", categoriController.getAddCategories);
router.get("/edit-categori/:id", categoriController.getEditCategories);

router.post("/edit-categori/:id", categoriController.updateCategories);
router.post("/add-categori", categoriController.postCategories);

router.delete("/delete-categori/:id", categoriController.deleteCategories);

// /**************************************************************************** */


// /*****************************  USER  *********************************************** */
router.get("/users", userController.getUsers);
router.get("/add-users", userController.getAddUsers);
router.get("/edit-users/:id", userController.getEditUsers);

router.post("/add-users", userController.postUsers);

// /**************************************************************************** */


module.exports = router;