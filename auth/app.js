const express = require("express");
require("./app/model.js");

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

const router = require('./app/routes.js')
app.use('/auth', router)

module.exports = app;