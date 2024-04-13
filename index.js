const express = require("express");
const bodyParser = require("body-parser");
const multer = require('multer');
const app = express();
const port = 4000;
const mysql = require("mysql");


var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

/****************************************** */
const adminRouter = require("./routers/admin");
app.use("/admin", adminRouter)
/****************************************** */

/****************************************** */
const clientRouter = require("./routers/client");
app.use("/client", clientRouter)
/****************************************** */

/****************************************** */
const apiRouter = require("./routers/api");
app.use("/api", apiRouter)
/****************************************** */

app.get("/", (req, res) => {
    res.render("client/home.ejs");
});

app.listen(port, () => { 
    console.log(`Example app listening on port http://127.0.0.1:${port}`);
});