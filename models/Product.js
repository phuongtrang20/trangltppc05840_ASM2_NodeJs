
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./Database.js");

const Product = sequelize.define("products",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: Sequelize.STRING,
    price: Sequelize.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });


module.exports = Product;