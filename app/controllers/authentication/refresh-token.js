const { refreshTokenService } = require("@services/authentication/refresh-token-service");

exports.refresh = async (ctx) => {
  try {
    ctx.body = await refreshTokenService(ctx.request.body.refreshToken);
  } catch (error) {
    throw error;
  }

};