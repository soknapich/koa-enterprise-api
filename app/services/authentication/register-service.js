const bcrypt = require("bcrypt");
const { UserModel } = require("@models");

exports.registerService = async (data) => {
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