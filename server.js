'use strict';
const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
function start(port) {
  app.listen(port, () => console.log(`Server is up on ${port}`));
}

app.get('/', (req, res) => {
  res.send('Hello ');
});
app.get('/wrong', (req, res) => {
  throw new Error('Something  wrong');
});
app.use('*', notFoundHandler);
app.use(errorHandler);
module.exports = {
  app: app,
  start: start,
};
