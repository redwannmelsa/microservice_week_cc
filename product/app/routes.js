const express = require('express')
const router = express();

const ctrl = require("./controller.js");

router.post('/', ctrl.createProduct)
router.get('/', ctrl.getProducts)
router.get('/:id', ctrl.getProductById)
router.put('/:id', ctrl.updateProduct)
router.delete('/:id', ctrl.deleteProduct)

module.exports = router