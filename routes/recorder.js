const express = require("express");
const router = express.Router();

const {getrecorder} = require("../controllers/recorder");
const passport = require("passport");

const { AuthTokenVerify } = require("../util/passport.js");
router.get("/getProduct", getrecorder);
module.exports = router;
