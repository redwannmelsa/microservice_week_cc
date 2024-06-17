const express = require("express");
require("./app/model.js");

const app = express();
app.use(express.json())

const router = require('./app/routes.js')
app.use('/', router)
// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
})

module.exports = app;