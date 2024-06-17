const express = require("express");
require("./app/model.js");

const app = express();
app.use(express.json())

const router = require('./app/routes.js')
app.use('/', router)

module.exports = app;