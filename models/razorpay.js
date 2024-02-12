"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class payment_details extends Model {
    static associate(models) {
      // define association here
    }
  }
  payment_details.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(11),
      },
      user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      product_name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      payment_id: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      order_id: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        unique: true,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        unique: true,
      }
    },
    {
      sequelize,
      modelName: "payment_details",
      freezeTableName: true,
    }
  );
  return payment_details;
};
