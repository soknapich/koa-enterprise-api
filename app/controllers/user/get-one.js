
const { UserModel } = require("@models");

exports.getOne = async (ctx) => {
  try {
    const result = await UserModel.findByPk(ctx.params.id, {
      attributes: { exclude: ["password", "refreshToken"] }, // ✅ hide password
    });

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