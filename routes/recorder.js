const express = require("express");
const router = express.Router();

const {getrecorder,getProductDetails,getProductCategory} = require("../controllers/recorder");
const passport = require("passport");

const { AuthTokenVerify } = require("../util/passport.js");
router.get("/getProduct", getrecorder);
router.get("/getProductDetails/:id", getProductDetails);  
router.get("/getProductCategory/:category", getProductCategory);
module.exports = router;
