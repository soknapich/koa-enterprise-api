const { AppTokenModel } = require("@models");
module.exports = async (ctx, next) => {
  try {

    const tokenKeyValue = ctx.headers["x-access-token"];

    const resultAppToken = await AppTokenModel.findOne({
      where: {
        tokenKeyValue,
        isActive: true,
        isDeleted: false
      },
      // raw: true
    });

    // check if the app token exists or record is active and not deleted
    if (!resultAppToken) {
      ctx.status = 403;
      throw new Error('Request Forbidden');
    }

    if (resultAppToken) {
      // check if the app token is expired
      if (resultAppToken.expiryDate < new Date()) {
        ctx.status = 403;
        throw new Error('Token Expired');
      }

      // check if the request url and method match the app token's apiUrls and method
      const jsonAppTokens = JSON.parse(resultAppToken.apiUrls);
      const requestUrl = ctx.request.url;

      const match = jsonAppTokens.find(r => {
        const pattern = "^" + r.url.replace(/:[^/]+/g, "[^/]+") + "$";
        const regex = new RegExp(pattern);
        return regex.test(requestUrl);
      });

      //const appUrl = match.url.replace(/\/:[^/]+$/, ''); // Remove trailing :param from url
      if ((!match) || ctx.request.method !== match.method.toUpperCase()) {
        ctx.status = 403;
        throw new Error('Invalid Request');
      }
    }

    await next();

  } catch (error) {
    throw error;
  }
}; 