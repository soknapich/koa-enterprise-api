const authService = require("@services/authentication");

exports.refresh = async (ctx) => {
  ctx.body = await authService.refreshToken(ctx.request.body.refreshToken);
};