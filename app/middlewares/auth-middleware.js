const { verifyAccess } = require("@utils/jwt");

module.exports = async (ctx, next) => {
  const authHeader = ctx.headers.authorization;
  if (!authHeader) ctx.throw(401, "No jwt token");

  const token = authHeader.split(" ")[1];
  try {
    const decoded = verifyAccess(token);
    ctx.state.user = decoded;
    await next();
  } catch (error) {
    throw error;
  }
}; 