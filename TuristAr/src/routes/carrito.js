const express = require('express');
const router = express.Router();
const carritoControllers = require('../controllers/carritoControllers');

router.get('/datos', carritoControllers.datos);
router.get('/pago', carritoControllers.pago);
router.get('/resumen', carritoControllers.resumen);

module.exports = router;