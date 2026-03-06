const { loginService } = require("@services/authentication/login-service");

exports.login = async (ctx) => {
  try {
    ctx.body = await loginService(ctx.request.body);
  } catch (error) {
    throw error;
  }
};