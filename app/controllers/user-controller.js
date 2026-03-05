
const { UserModel } = require("@models");

exports.getAll = async (ctx) => {
  try {
    const result = await UserModel.findAll({
      attributes: { exclude: ["password", "refreshToken"] }, // ✅ hide password
      order: [["createdAt", "DESC"]]
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