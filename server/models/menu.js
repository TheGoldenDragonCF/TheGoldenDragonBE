'use strict';

//made a sql model for all the menu items.
//Made them all have the datatype string since I want to store the price with its $ symbol and . to separate dollars from change.

//url should link to the image on the image hosting site of our choice.

const menuModel = (sequelize, DataTypes) => {
  const model = sequelize.define('Menu Item', {
    Name: {type: DataTypes.STRING, required:true},
    Description: {type: DataTypes.STRING, required:true},
    Section: { type: DataTypes.ENUM('Entree', 'Side'), required: true, defaultValue: 'Entree'},
    ImageLink: {type: DataTypes.STRING, required:true}
  });
  return model
}

module.exports = menuModel;
