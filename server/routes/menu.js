'use strict';

const express = require('express');
const menuRouter = express.Router();

const { menus } = require('../models');

//returns all the menu items when called
menuRouter.get('/menu', async (req, res, next) => {
  try {
    let menuCache = await menus.get();
    res.status(201).json(menuCache);
  } catch (e) {
    next(e.message)
  }
});

//in the req.body, have a Name, Description, Section and imageLink
//returns the entire body, including newly assigned id
menuRouter.post('/menu', async (req, res, next) => {
  try {
    let newMenu = await menus.create(req.body);
    res.status(201).json(newMenu);
  } catch (e) {
    next(e.message)
  }
});


//in the req.body, have all the sections of a menu item, they can be Name, Description, Section and imageLink or leave them blank if you wish to leave them the same


//also in the req body, also include the id of the menu item that you wish to edit
//will return the newly edited menu items body
menuRouter.put('/menu', async (req, res, next) => {
  try {
    //let updatedMenu =
  } catch (e) {
    next(e.message)
  }
});

//in the header, have a id tag, with the value equal to an existing id tag
//returns the deleted menu item
menuRouter.delete('/menu', async (req, res, next) => {
  try {
    let deletedMenu = await menus.delete(req.headers.id);
    res.status(200).json(deletedMenu);
  } catch (e) {
    next(e.message)
  }
});

module.exports = menuRouter;
