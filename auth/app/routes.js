const express = require('express')
const router = express();

const ctrl = require("./controller.js");

router.post('/signup', ctrl.createUser);
router.post('/login', ctrl.login);
router.get('/getUserInfoFromToken', ctrl.getUserInfoFromToken)

module.exports = router