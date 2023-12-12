const express = require('express');
const router = express.Router();
const usersController =  require('../controllers/usersController.js');
const upload = require('../middleware/multerUser');
const {validaciones,validacion}= require("../middleware/validationEditUser.js")

router.get('/:id', usersController.profile);

router.get('/edit/:id', usersController.edit);
router.put('/edit/:id', upload.single('image') ,validaciones,validacion, usersController.update);

module.exports = router