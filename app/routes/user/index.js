const Router = require("koa-router");
const { getAll } = require("@controllers/user/get-all");

const router = new Router({ prefix: "/api/user" });
router.get("/get-all", getAll);  // ✅ new register route


module.exports = router;