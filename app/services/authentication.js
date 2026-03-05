const bcrypt = require("bcrypt");
const { UserModel } = require("@models");
const { generateAccessToken, generateRefreshToken, verifyRefresh } = require("@utils/jwt");

exports.register = async (data) => {
  const { username, password, role } = data;

  // check if user already exists
  const existing = await UserModel.findOne({ where: { username } });
  if (existing) throw new Error("Username already exists");

  // hash password
  const hashed = await bcrypt.hash(password, 10);

  // create user
  const user = await UserModel.create({
    username,
    password: hashed,
    role: role || "USER"
  });

  return { id: user.id, username: user.username, role: user.role };
};

exports.login = async (data) => {
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

exports.refreshToken = async (token) => {
  const decoded = verifyRefresh(token);
  const user = await UserModel.findByPk(decoded.id);

  if (!user || user.refreshToken !== token)
    throw new Error("Invalid refresh token");

  return {
    accessToken: generateAccessToken({ id: user.id, role: user.role })
  };
};