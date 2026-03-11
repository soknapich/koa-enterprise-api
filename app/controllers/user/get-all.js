
const { UserModel } = require("@models");
const { axiosGetNCFolders } = require('@connections/axios-nextcloud');
exports.getAll = async (ctx) => {
  try {
    // const result = await UserModel.findAll({
    //   attributes: { exclude: ["password", "refreshToken"] }, // ✅ hide password
    //   order: [["createdAt", "DESC"]]
    // });

    const result = await axiosGetNCFolders("customer-01");

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