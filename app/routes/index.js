const Router = require("koa-router");
const combineRouters = require("koa-combine-routers");
const authRoutes = require("@routes/authentication");
const userRoutes = require("@routes/user");
const rootRouter = new Router();

const { axiosFake } = require('@connections/axios-fake');
const { ProductModel } = require("@models");
const { coreApi } = require("@constants/apis");

rootRouter.get("/", async (ctx) => {
  // const products = await ProductModel.findAll();
  try {
    const response = await axiosFake.get(coreApi.fakeProductApi);

    ctx.body = {
      status: 200,
      message: "Success",
      data: response.data
    };

  } catch (error) {
    throw error;
  }

});

module.exports = combineRouters(
  rootRouter,
  authRoutes,
  userRoutes
);