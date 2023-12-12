const express = require('express');
const router = express.Router();
const favController = require('../controllers/favController');


router.get('/create/:id', favController.create );

router.get('/delete/:id', favController.delete );

module.exports = router