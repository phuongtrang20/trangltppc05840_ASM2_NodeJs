const express = require('express');
const router = express.Router();
const multer = require("multer")
const app = express();
// const upload = multer({ dest: "../public/data/upload/"})
const upload = multer({ dest: "upload"})


router.get("/", (req, res) => {
    res.render("client/home.ejs");
});

router.get("/shop", (req, res) => {
    res.render("client/shop.ejs")
});

router.get("/shop-detail", (req, res) => {
    res.render("client/shop-detail.ejs")
});

router.get("/contact", (req, res) => {
    res.render("client/contact.ejs")
});

router.get("/cart", (req, res) => {
    res.render("client/cart.ejs")
});

router.get("/chackout", (req, res) => {
    res.render("client/chackout.ejs")
});

module.exports = router;