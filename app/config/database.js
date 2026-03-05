const { Sequelize } = require("sequelize");
const env = require("@config/env");

const sequelize = new Sequelize(
  env.DB.NAME,
  env.DB.USER,
  env.DB.PASS,
  {
    host: env.DB.HOST,
    dialect: "mssql",
    logging: false
  }
);

module.exports = sequelize;