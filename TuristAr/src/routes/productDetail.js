const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.get('/detail', productControllers.detail);

module.exports = router;