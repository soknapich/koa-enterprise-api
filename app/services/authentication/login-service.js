const bcrypt = require("bcrypt");
const { UserModel } = require("@models");
const { generateAccessToken, generateRefreshToken } = require("@utils/jwt");

exports.loginService = async (data) => {
  const user = await UserModel.findOne({ where: { username: data.username } });
  if (!user) throw new Error("User not found");

  const match = await bcrypt.compare(data.password, user.password);
  if (!match) throw new Error("Invalid password");

  const accessToken = generateAccessToken({ id: user.id, role: user.role });
  const refreshToken = generateRefreshToken({ id: user.id });

  user.refreshToken = refreshToken;
  await user.save();

  return { accessToken, refreshToken };
};
