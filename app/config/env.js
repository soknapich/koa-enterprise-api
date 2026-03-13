

// ✅ Load env explicitly with custom-env
const customEnv = require("custom-env");
const envName = process.env.NODE_ENV || "local";
customEnv.env(envName);

module.exports = {
  PORT: process.env.PORT,
  DB: {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASS: process.env.DB_PASS,
    NAME: process.env.DB_NAME
  },
  JWT: {
    ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
    REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
    ACCESS_EXPIRE: "1h",
    REFRESH_EXPIRE: "7d"
  },

  API: {
    FAKE_PRODUCT_API: process.env.FAKE_PRODUCT_API
  },

  NC: {
    URL: process.env.NC_URL,
    FOLDER_PATH: process.env.NC_FOLDER_PATH,
    USERNAME: process.env.NC_USERNAME,
    PASSWORD: process.env.NC_PASSWORD
  }
};