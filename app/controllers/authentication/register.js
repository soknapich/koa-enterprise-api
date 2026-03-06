const { registerService } = require("@services/authentication/register-service");

exports.register = async (ctx) => {
  try {
    const result = await registerService(ctx.request.body);

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
