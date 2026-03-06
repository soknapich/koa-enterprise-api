const Router = require("koa-router");
const combineRouters = require("koa-combine-routers");
const authRoutes = require("@routes/authentication");
const userRoutes = require("@routes/user");
const rootRouter = new Router();
const { index } = require("@controllers/index");

rootRouter.get("/", index);

module.exports = combineRouters(
  rootRouter,
  authRoutes,
  userRoutes
);