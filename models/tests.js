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
      product_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      test_name: {
        type: DataTypes.STRING(255),
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
      modelName: "tests",
      freezeTableName: true,
    }
  );
  return payment_details;
};
