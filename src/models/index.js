'use strict';

require('dotenv');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const { Sequelize, DataTypes} = require('sequelize');

const Collection = require('./collection-class.js');

const foodModel = require('./food.js');
const clothesModel = require('./clothes.js');

let sequelize = new Sequelize(DATABASE_URL);

const food = foodModel(sequelize, DataTypes);

const clothes = clothesModel(sequelize, DataTypes);

const foodCollection = new Collection('food', food);

const clothesCollection = new Collection('clothes', clothes);

foodCollection.createAssociation('hasMany', foodCollection.model, { foreignKey: 'foodId', sourceKey: 'id'});

clothesCollection.createAssociation('belongsTo', clothesCollection.model, {foreignKey: 'clothesId', targetKey: 'id'});

module.exports = {
  db: sequelize,
  foodCollection,
  clothesCollection,
};