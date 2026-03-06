const sequelize = require("@config/database");
const User = require("@models/user/user");
const Product = require("@models/product/product");
const ApiToken = require("@models/app-token");

const db = {};
db.sequelize = sequelize;
db.UserModel = User(sequelize);
db.ProductModel = Product(sequelize);
db.AppTokenModel = ApiToken(sequelize);
module.exports = db;