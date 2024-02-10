const Sequelize = require("sequelize");
const DB = require("../models");


exports.createOrder = async (req, res) => {
  try {
    var response = {};
    // STEP 1: 
    const {amount,currency,receipt, notes}  = req.body;       
          
    // STEP 2:     
    razorpayInstance.orders.create({amount, currency, receipt, notes},  
        (err, order)=>{  
          if(!err){
            response["data"] = order;
            response["success_msg"] = "SUCCESS";
            return res.status(200).json(response);
          }
          else
            res.send(err); 
        } 
    )
    // DB.payment_details
    //   .findAll()
    //   .then((data) => {
      
    //   });
  } catch (error) {
    console.log(error);
  }
};
