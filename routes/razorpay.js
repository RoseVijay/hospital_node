const express = require("express");
const router = express.Router();

const {createOrder,payment} = require("../controllers/razorpay");

router.post("/createOrder", createOrder);
router.post("/payment", payment);
module.exports = router;
