// creating sequelize object (communication tool)

const { Sequelize } = require("sequelize");

const applicationSequelizeObject = new Sequelize(
  //db name //postgres admin// pw  // object containing host and dialect
  "todo-db",
  "postgres",
  "pyth0n2o2o",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

module.exports = applicationSequelizeObject; //object
