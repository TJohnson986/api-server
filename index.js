'use strict';

require ('dotenv').config();

const server = require('./src/server.js');

const PORT = process.env.PORT || 3000;

const data = require('./src/models/index.js');

data.db.sync();
server.start(PORT);