'use strict'
// npm modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
// const index = require('./routes/');
// local modules
const PORT = process.env.PORT || 3000;
const MONGODB_HOST = process.env.MONGODB_HOST || 'localhost';
const MONGODB_PORT = process.env.MONGODB_PORT || 27017;
const MONGODB_USER = process.env.MONGODB_USER || '';
const MONGODB_PASS = process.env.MONGODB_PASS || '';
const MONGODB_NAME = process.env.MONGODB_NAME || 'stock-portfolio';
const MONGODB_URL_PREFIX = MONGODB_USER ? `${MONGODB_USER}:${MONGODB_PASS}@` : '';

const MONGODB_URL = `mongodb://${MONGODB_URL_PREFIX}${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;

// localhost:27017/node-webserver;
// if (process.env.Node_ENV === 'production') {
//   MONGODB_URL = 'mongodb://@ds045001.mongolab.com:45001/mpw-node-webserver';
// } else {

// }
// app.set creates a variable that is availble in all express modules
// app.set('view engine', 'jade');
// app.locals is an object that can be passed to all res.render
// app.locals.title = 'Make Calendars Great Again!!'

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(index);

app.get('/', (req, res) => {
    res.send('hello world');
})

// app.use(require('node-sass-middleware')({
//   src: path.join(__dirname, 'public'),
//   dest: path.join(__dirname, 'public'),
//   indentedSyntax: true,
//   sourceMap: true
// }));

mongoose.connect(MONGODB_URL);

mongoose.connection.on('open', () => {
  // console.log('MONGO OPEN');
  app.listen(PORT, () => {
  // console.log(`Node.js server has started. Listening on port ${PORT}`);
  });
})

module.exports = app;
