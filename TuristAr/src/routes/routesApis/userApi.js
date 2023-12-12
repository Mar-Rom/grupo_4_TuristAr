const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/controllersApi/userApiController');

// Rutas para usuarios
router.get('/usuarios', UserController.getAllUsers); // Obtener todos los usuarios
router.get('/usuarios/:id', UserController.getUserById); // Obtener un usuario por ID
router.post('/usuarios', UserController.createUser); // Crear un nuevo usuario
router.put('/usuarios/:id', UserController.updateUser); // Actualizar un usuario existente por ID
router.delete('/usuarios/:id', UserController.deleteUser); // Borrar un usuario por ID

module.exports = router;
