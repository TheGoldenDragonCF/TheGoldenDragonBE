'use strict';

const cartModel = (sequelize, DataTypes) => {
  const model = sequelize.define('Cart', {
    order: { type: DataTypes.STRING, required: true},
    username: { type: DataTypes.STRING, required:true},
    name: {type: DataTypes.STRING, required:true},
  });
  return model;
}

module.exports = cartModel;
