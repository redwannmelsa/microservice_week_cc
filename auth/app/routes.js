const express = require('express')
const router = express();

const ctrl = require("./controller.js");
const verifyJWT = require('./middleware.js')

router.post('/signup', ctrl.createUser);
router.post('/login', ctrl.login);
router.get('/getUserInfoFromToken', verifyJWT, ctrl.getUserInfoFromToken)

module.exports = router