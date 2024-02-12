const Sequelize = require("sequelize");
const DB = require("../models");
const Razorpay = require('razorpay');

const razorpayInstance = new Razorpay({  
  // Replace with your key_id 
  key_id: process.env.RAZORPAY_KEY, 
  // Replace with your key_secret 
  key_secret: process.env.RAZORPAY_SECRET_KEY 
}); 

exports.createOrder = async (req, res) => {
  try {
    var response = {};
    // STEP 1: 
    const { amount, currency, receipt, notes } = req.body;
    // STEP 2:     
    razorpayInstance.orders.create({ amount, currency, receipt, notes },
      (err, order) => {
        if (order) {
          response["data"] = order;
          response["success_msg"] = "SUCCESS";
          return res.status(200).json(response);
        }
        else
          res.send(err);
      }
    )
  } catch (error) {
    console.log(error);
  }
};
exports.payment = async (req, res) => {
  try {
    var response = {};
    const paymentDetails = {
      user_id: req.body.RAZORPAY_OPTIONS.user_id,
      user_name: req.body.RAZORPAY_OPTIONS.name,
      amount: req.body.RAZORPAY_OPTIONS.amount,
      product_name:req.body.RAZORPAY_OPTIONS.description,
      payment_id:req.body.razorpay_payment_id,
      order_id:req.body.RAZORPAY_OPTIONS.order_id,
    }
    console.log('paymentDetails==>',paymentDetails)
    // DB.payment_details
    //   .findAll()
    //   .then((data) => {

    //   });
  } catch (error) {
    console.log(error);
  }
};
