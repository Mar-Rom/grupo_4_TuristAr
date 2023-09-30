const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');

router.get('/', productControllers.all);

router.get('/detail/:id', productControllers.detail);
// crar un producto y guardarlo
router.get('/create', productControllers.crear);
router.post('/',productControllers.agregar);
//editar
router.get('/edit/:id', productControllers.edit)
router.put('/edit/:id',productControllers.guardarCambios);


module.exports = router;