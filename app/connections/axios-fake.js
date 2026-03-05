const env = require("@config/env");

const axios = require('axios');
const https = require('https');

module.exports.axiosFake = axios.create({
  baseURL: env.API.FAKE_PRODUCT_API,
  httpsAgent: new https.Agent({ keepAlive: true })
});
