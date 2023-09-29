const express = require('express');
const router = express.Router();
const mainControlles = require('../controllers/mainControllers');

//  ↓↓↓ router.get('/', MainController) ↓↓↓
router.get('/', mainControlles.home);
router.post('/', mainControlles.home);

router.get('/login', mainControlles.login)


router.get('/register', mainControlles.register)
router.post('/register', mainControlles.register)

router.get('/valid', mainControlles.valid)

module.exports = router;