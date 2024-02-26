const Sequelize = require("sequelize");
const DB = require("../models");
const Razorpay = require('razorpay');
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN, { lazyLoading: true })

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
      product_name: req.body.RAZORPAY_OPTIONS.description,
      payment_id: req.body.razorpay_payment_id,
      order_id: req.body.RAZORPAY_OPTIONS.order_id,
    }
    console.log('paymentDetails==>', paymentDetails)
    // DB.payment_details
    //   .findAll()
    //   .then((data) => {

    //   });
  } catch (error) {
    console.log(error);
  }
};
exports.sendOTP = async (req, res) => {
  try {
    var response = {};
    console.log('paymentDetails==>', req.body.number);
    const otp = Math.floor(100000 + Math.random() * 900000);

    // const jhbhb = await client.verify.services(process.env.TWILIO_ACCOUNT_SID).verifications({
    //   to: `+91${req.body.number}`,
    //   channel: 'sms'
    // })
    client.messages
    .create({
        body: ('your otp is : ' + otp),
        from: '+17577720938',
        to: ('+91' + req.body.number)
    })
    .then((message) => {
      console.log(message.sid)
    console.log('===========')
    // console.log(jhbhb)
    console.log('===========')
    response["success_msg"] = "OTP sent successfully!";
    // response["data"] = jhbhb;
    return res.status(200).json(response);
  })
    // DB.payment_details
    //   .findAll()
    //   .then((data) => {

    //   });
  } catch (error) {
    console.log(error);
  }
};
