
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./Database.js");

const Category = sequelize.define("categories",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: Sequelize.STRING,
  },
  {
    timestamps: false,
  });


module.exports = Category;