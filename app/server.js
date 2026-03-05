require("module-alias/register");  // module alias support

const app = require("./app");       // your Koa app
const env = require("@config/env"); // central config
const sequelize = require("@config/database");

// Start the server
const startServer = async () => {
  try {
    // ✅ Test DB connection first
    await sequelize.authenticate();
    console.log("✅Database connection established.");
    // Start server
    app.listen(env.PORT, () => {
      //console.log(`Connected to DB_HOST:${env.DB.HOST} || user:${env.DB.USER} || db_name:${env.DB.NAME}`);
      console.log(`🚀App is running on http://localhost:${env.PORT}`);
    });

  } catch (error) {
    console.error("❌Unable to connect to the database");
    console.error(error.message);
    process.exit(1); // stop application
  }
};

startServer();