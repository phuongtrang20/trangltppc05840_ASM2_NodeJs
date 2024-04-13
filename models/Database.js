// var mysql = require("mysql");
// var db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "mysql",
//   database: "asmnodejs",
// });
// db.connect(function (err) {
//   if (err) throw err;
//   console.log("Database is connected successfully !");
// });
// module.exports = db;


// // C1: sử dụng callback
// // C2: Sử dụng async/await



const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('asmnodejs', 'root', 'mysql', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;