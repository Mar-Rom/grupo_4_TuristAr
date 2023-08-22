const express = require('express');
const router = express.Router();
const mainControlles = require('../controllers/mainControllers');

router.get('/', mainControlles.home);

module.exports = router;