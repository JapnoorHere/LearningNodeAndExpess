const express = require('express');
const productController = require('../controllers/productControllers');

const router = express.Router();

router.get('/',productController.homePage);

router.get('/products',productController.readProduct);
router.post('/products',productController.createProduct);
router.get('/products/update/:id',productController.readProduct);
router.get('/products/delete/:id',productController.readProduct);


module.exports = router;