'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const Collection = require('./data-collection.js');
const userModel = require('./users.js');
const cartModel = require('./cart.js');
const menuModel = require('./menu.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

let herokuOptions = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

const sequelize = new Sequelize(DATABASE_URL, herokuOptions);
const users = userModel(sequelize, DataTypes);
const carts = cartModel(sequelize, DataTypes);
const menu = menuModel(sequelize, DataTypes);


module.exports = {
  db: sequelize,
  users: new Collection(users),
  carts: new Collection(carts),
  menus: new Collection(menu),
};
