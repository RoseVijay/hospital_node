const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var session = require("express-session");
const cors = require("cors");
const sequelize = require("./config/keys");
// const mongoose = require('mongoose');
require("dotenv").config();
// bring routes
const recorderRoutes = require("./routes/recorder");
const razorpayRoutes = require("./routes/razorpay");
const userRoutes = require("./routes/user");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const companion = require("@uppy/companion");
// app
// const backendUrl = "localhost:3011";
const protocolId = "https";
// const protocolId = "http";
const backendUrl = "app.transcribr.io/api";

const app = express();

const store = new SequelizeStore({
  db: sequelize,
});
app.use(
  session({
    secret: "wifihotspot",
    store: store,
    resave: false,
    saveUninitialized: false,
  })
);
store.sync();
// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// cors
// if (process.env.NODE_ENV === "development") {
app.use(cors({ origin: "*" }));
// }
// var corsOptions = {
//   origin: "*",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
// app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  next();
});

// routes middleware
app.use(process.env.APIPATH + "/getProductDetails", recorderRoutes);
app.use(process.env.APIPATH + "/razorpay", razorpayRoutes);
app.use(process.env.APIPATH + "/getUser", userRoutes);
// app.use(companion.app(options));

// port
const port = process.env.PORT || 3011;
const server = app.listen(port);
// , () => {
//   console.log(`Server is running on port ${port}`);
// });
companion.socket(server);
