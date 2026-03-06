const authService = require("@services/authentication");

exports.login = async (ctx) => {
  ctx.body = await authService.login(ctx.request.body);
};