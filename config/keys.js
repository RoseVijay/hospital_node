require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
    define: {
      timestamps: false
  }
  }
);
// server_host_DB = parvathyhomecare.ctyme06sa802.ap-south-1.rds.amazonaws.com
module.exports = sequelize;
