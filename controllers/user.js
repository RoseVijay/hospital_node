const Sequelize = require("sequelize");
const DB = require("../models");


exports.getUserDetails = async (req, res) => {
  try {
    var response = {};
    DB.users
    .findOne({ where: { id: 1} })
      .then((data) => {
        response["data"] = data;
        response["success_msg"] = "SUCCESS";
        return res.status(200).json(response);
      });
  } catch (error) {
    console.log(error);
  }
};
