const Sequelize = require("sequelize");
const DB = require("../models");


exports.getrecorder = async (req, res) => {
  try {
    var response = {};
    DB.product_details
      .findAll()
      .then((data) => {
        response["data"] = data;
        response["success_msg"] = "SUCCESS";
        return res.status(200).json(response);
      });
  } catch (error) {
    console.log(error);
  }
};
