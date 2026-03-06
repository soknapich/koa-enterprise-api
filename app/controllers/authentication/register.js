const authService = require("@services/authentication");

exports.register = async (ctx) => {
  try {
    const result = await authService.register(ctx.request.body);

    ctx.body = {
      status: 200,
      message: "Success",
      data: result
    };
  } catch (err) {
    ctx.status = 400;
    ctx.body = { success: false, message: err.message };
  }
};
