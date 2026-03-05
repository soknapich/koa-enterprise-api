const Router = require("koa-router");
const authController = require("@controllers/auth-controller");

const router = new Router({ prefix: "/auth" });
router.post("/register", authController.register);  // ✅ new register route
router.post("/login", authController.login);
router.post("/refresh", authController.refresh);

module.exports = router;