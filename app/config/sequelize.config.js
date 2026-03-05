const path = require("path");

module.exports = {
  local: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mssql",
    migrationStorageTableName: "SequelizeMeta",
    seederStorageTableName: "SequelizeData",
    migrationStoragePath: path.join(__dirname, "../app/migrations"),
    seederStoragePath: path.join(__dirname, "../app/seeders"),
  },
  qa: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mssql",
    migrationStorageTableName: "SequelizeMeta",
    seederStorageTableName: "SequelizeData",
    migrationStoragePath: path.join(__dirname, "../app/migrations"),
    seederStoragePath: path.join(__dirname, "../app/seeders"),
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mssql",
    migrationStorageTableName: "SequelizeMeta",
    seederStorageTableName: "SequelizeData",
    migrationStoragePath: path.join(__dirname, "../app/migrations"),
    seederStoragePath: path.join(__dirname, "../app/seeders"),
  },
};