const express = require('express');
const app = express();
const proxy = require("express-http-proxy")
const middlewares = require('./app/middlewares')

app.use("/api/auth", proxy("http://auth-service:8081"))
app.use("/api/product", middlewares.adminMiddleware, proxy("http://product-service:8082"))

app.listen(3000, () => {
  console.log('API Gateway en cours d\'exécution sur le port 3000');
})