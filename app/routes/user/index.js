const Router = require("koa-router");
const userController = require("@controllers/user-controller");

const router = new Router({ prefix: "/users" });
router.get("/get-all", userController.getAll);  // ✅ new register route


module.exports = router;