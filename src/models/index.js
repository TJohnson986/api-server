'use strict';

require('dotenv');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const { Sequelize, DataTypes} = require('sequelize');

const foodModel = require('./food.js');

let sequelize = new Sequelize(DATABASE_URL);

const food = foodModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  food: food,
};