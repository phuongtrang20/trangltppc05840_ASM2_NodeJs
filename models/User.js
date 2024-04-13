
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./Database.js");

const User = sequelize.define("users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: Sequelize.STRING,
    password: DataTypes.STRING,
    email: Sequelize.STRING,
    full_name: DataTypes.STRING,
    role: Sequelize.INTEGER
  },
  {
    timestamps: false,
  });


module.exports = User;