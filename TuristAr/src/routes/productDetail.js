const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.get('/', productControllers.all);
router.get('/detail', productControllers.detail);
// crar un producto y guardarlo
router.get('/crear', productControllers.crear);
router.post('/detail', productControllers.agregar);
router.get('/edit', productControllers.edit)
router.put('/edit',productControllers.guardarCambios);

module.exports = router;