'use strict';

const express = require('express');
const cartRouter = express.Router();

const { carts } = require('../models');

cartRouter.post('/newOrder', async (req, res, next) => {
  try {
    let cartRecord = await carts.create(req.body);
    const output = {
      user: cartRecord,
    };
    res.status(201).json(output);
  } catch (e) {
    next(e.message)
  }
});

cartRouter.get('/order', async(req, res, next) => {
  //gets all the carts, checks if they are the current day, if they are, return them.
  let total = await carts.get();
  res.status(200).json(total);
});

cartRouter.delete('/order', async (req, res, next) => {
  const userRecord = await carts.delete(req.header.id);
  res.status(200).json(userRecord);
});

module.exports = cartRouter;
