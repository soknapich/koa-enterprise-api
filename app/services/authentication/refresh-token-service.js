
const { UserModel } = require("@models");
const { generateAccessToken, verifyRefresh } = require("@utils/jwt");

exports.refreshTokenService = async (token) => {
  const decoded = verifyRefresh(token);
  const user = await UserModel.findByPk(decoded.id);

  if (!user || user.refreshToken !== token)
    throw new Error("Invalid refresh token");

  return {
    accessToken: generateAccessToken({ id: user.id, role: user.role })
  };
};