const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.get('/', productControllers.all);

router.get('/detail', productControllers.detail);
// crar un producto y guardarlo
router.get('/create', productControllers.crear);
router.post('/create',productControllers.agregar);
//editar
router.get('/edit', productControllers.edit)
router.put('/edit',productControllers.guardarCambios);


module.exports = router;