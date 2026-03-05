const sequelize = require("@config/database");
const User = require("@models/user/user");
const Product = require("@models/product/product");

const db = {};
db.sequelize = sequelize;
db.UserModel = User(sequelize);
db.ProductModel = Product(sequelize);
module.exports = db;