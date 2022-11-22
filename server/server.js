'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources

const { db } = require('./models')
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./routes/auth.js');
const logger = require('./middleware/auth/logger.js');

const cartRoutes = require('./routes/cart.js');
const bearer = require('./middleware/auth/bearer.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.get('/', (req, res) => {

  try {
    res.status(200).send('life');
  } catch (e) {
    console(e);
  }
});


// Routes
app.use(authRoutes);
app.use(cartRoutes);
// Catchalls
app.use(notFound);
app.use(errorHandler);

module.exports = {
  app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    db.sync().then(app.listen(port, () => console.log(`Listening on ${port}`)));
  },
};
