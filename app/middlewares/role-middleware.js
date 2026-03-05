module.exports = (roles = []) => {
  return async (ctx, next) => {
    const user = ctx.state.user;
    if (!roles.includes(user.role)) {
      ctx.throw(403, "Forbidden");
    }
    await next();
  };
};