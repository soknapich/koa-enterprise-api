const Router = require("koa-router");
const { getAll } = require("@controllers/user/get-all");
const { getOne } = require("@controllers/user/get-one");

const router = new Router({ prefix: "/api/user" });
router.get("/get-all", getAll);  // ✅ new register route
router.get("/get-one/:id", getOne); // ✅ new get one route


module.exports = router;