const Koa = require("koa");
const cors = require("@koa/cors");
const bodyParser = require("koa-bodyparser");
const logger = require("koa-pino-logger");
const corsConfig = require("@config/core");
const routes = require("@routes");
const errorHandler = require("@middlewares/error-middleware");
const authMiddleware = require("@middlewares/auth-middleware");
const tokenMiddleware = require("@middlewares/token-middleware");
const app = new Koa();

// 2️⃣ Logger (optional, can reduce level in dev)
app.use(logger());

app.use(bodyParser());

// 1️⃣ Error handler first
app.use(errorHandler);

// 3️⃣ CORS
app.use(cors({
  origin: corsConfig.origin,
  allowMethods: corsConfig.methods,
  allowHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));


// 4️⃣ Protect routes (skip /api/auth/*)
app.use(async (ctx, next) => {
  if (ctx.path.startsWith("/api/auth")) {
    // public routes
    await next();
  } else {
    // protected routes
    if (ctx.headers["x-access-token"] !== undefined) {
      //x-access-token header is present, use token middleware
      await tokenMiddleware(ctx, next);
    } else {
      //User login
      await authMiddleware(ctx, next);
    }
  }
});

// 5️⃣ Routes
app.use(routes());

// 6️⃣ Connect DB
//sequelize.sync();

module.exports = app;