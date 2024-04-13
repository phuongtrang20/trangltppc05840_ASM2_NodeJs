const express = require("express");
const multer = require("multer");
const ProductController = require("../contronllers/api/ProductController");
const CategoryController = require("../contronllers/api/CategoriController");
const upload = multer({dest: "upload/"});
const router = express.Router();


    

/** *************** PRODUCT ********************/
router.get("/products", ProductController.getProducts);
router.get("/products/:id", ProductController.getOneProducts)
router.post("/add-products", upload.single("image"), ProductController.postProducts);
router.put("/edit-products/:id", upload.single("image"), ProductController.updateProducts);
router.delete("/products/:id", ProductController.deleteProducts);

/** ***********************************/


/** ************** CATEGORY *********************/
router.get("/category", CategoryController.getCategory);
router.get("/category/:id", CategoryController.getOneCategory)


/** ***********************************/


module.exports = router;