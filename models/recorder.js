"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class recorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recorder.init(
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
      discount: {
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
      modelName: "product_details",
    }
  );
  return recorder;
};
