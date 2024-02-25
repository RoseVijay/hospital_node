const express = require("express");
const router = express.Router();

const {createOrder,payment,sendOTP} = require("../controllers/razorpay");

router.post("/createOrder", createOrder);
router.post("/payment", payment);
router.post("/sendOTP", sendOTP);
module.exports = router;
