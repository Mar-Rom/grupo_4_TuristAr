const express = require('express');
const router = express.Router();
const ProductsController = require('../../controllers/controllersApi/productsApiController');

// Rutas para productos
router.get('/products', ProductsController.all); // Obtener todos los productos
router.get('/products/:id', ProductsController.detail); // Obtener un producto por ID
router.get('/products/search', ProductsController.search); // Buscar productos por destino
router.post('/products', ProductsController.crear); // Agregar un nuevo producto
router.put('/products/:id', ProductsController.guardarCambios); // Actualizar un producto por ID
router.delete('/products/:id', ProductsController.delete); // Eliminar un producto por ID

module.exports = router;
