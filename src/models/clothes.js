'use strict';

const clothesModel = (sequelize, DataTypes) => {
  return sequelize.define('Clothes', {
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    color: {
      type: DataTypes.STRING,
      required: false,
    },
  });
};

module.exports = clothesModel;