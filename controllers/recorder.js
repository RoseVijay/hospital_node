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
exports.getProductDetails = async (req, res) => {
  try {
    var response = {};
    DB.product_details
      .findOne({ where: { id: req.params.id } })
      .then((data) => {
        DB.question_answer
          .findAll({ where: { product_id: req.params.id } })
          .then((questionAnswer) => {
            DB.tests
              .findAll({ where: { product_id: req.params.id } })
              .then((tests) => {
                response["data"] = data;
                response["questionAnswer"] = questionAnswer;
                response["tests"] = tests;
                response["success_msg"] = "SUCCESS";
                return res.status(200).json(response);
              })
          })
      });
  } catch (error) {
    console.log(error);
  }
};
exports.getProductCategory = async (req, res) => {
  try {
    var response = {};
    DB.product_details
      .findAll({ where: { category: req.params.category } })
      .then((data) => {
        response["data"] = data;
        response["success_msg"] = "SUCCESS";
        return res.status(200).json(response);
      });
  } catch (error) {
    console.log(error);
  }
};
