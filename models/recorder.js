"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product_details.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER(11),
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      discription: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      reportTime: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      fastingTime: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      related_product_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
      },
      discount: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      tests: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      testSample: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      ageGroup: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      testDescription: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      questionAnswer: {
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
      modelName: "product_details",
    }
  );
  return product_details;
};
