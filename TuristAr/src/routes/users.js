const express = require('express');
const router = express.Router();
const usersController =  require('../controllers/usersController.js');

router.get('/:id', usersController.profile);
router.get('/edit/:id', usersController.edit);
router.put('/edit/:id', usersController.update);

module.exports = router