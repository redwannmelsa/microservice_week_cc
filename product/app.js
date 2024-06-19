const express = require("express");
require("./app/model.js");

const app = express();
app.use(express.json())
// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
})
const router = require('./app/routes.js')
app.use('/', router)

module.exports = app;