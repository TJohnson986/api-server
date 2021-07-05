'use strict';

const express = require('express');
const foodRoutes = require('./routes/food.js');

const app = express();

app.use(express.json());
app.use(foodRoutes);

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log('app is running'));
  },
};