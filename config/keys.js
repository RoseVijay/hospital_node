require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASS,
  {
    host: "parvathyhomecare.ctyme06sa802.ap-south-1.rds.amazonaws.com",
    dialect: "mysql",
    operatorsAliases: false,
    define: {
      timestamps: false
  }
  }
);

module.exports = sequelize;
