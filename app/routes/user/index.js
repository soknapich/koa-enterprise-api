const Router = require("koa-router");
const { getAll } = require("@controllers/user/get-all");
const { getOne } = require("@controllers/user/get-one");
const { uploadFile } = require("@controllers/user/upload-file");

const router = new Router({ prefix: "/api/user" });
router.get("/get-all", getAll);  // ✅ new register route
router.get("/get-one/:id", getOne); // ✅ new get one route
router.post("/upload-file", uploadFile); // ✅ new upload file route


module.exports = router;