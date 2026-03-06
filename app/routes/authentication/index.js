const Router = require("koa-router");
const { register } = require("@controllers/authentication/register");
const { login } = require("@controllers/authentication/login");
const { refresh } = require("@controllers/authentication/refresh-token");

const router = new Router({ prefix: "/api/auth" });

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refresh);

module.exports = router;