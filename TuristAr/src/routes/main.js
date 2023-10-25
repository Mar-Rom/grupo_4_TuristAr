const express = require('express');
const router = express.Router();
const mainControlles = require('../controllers/mainControllers');
/**Express-validator */
const { validacion, result} = require('../middleware/validationLogin')

//  ↓↓↓ router.get('/', MainController) ↓↓↓
router.get('/', mainControlles.home);
router.post('/', mainControlles.home);

router.get('/login', mainControlles.login)
router.post('/login', validacion, result, mainControlles.processLogin)


router.get('/register', mainControlles.register)
router.post('/register', mainControlles.register)

router.get('/valid', mainControlles.valid)  

router.get('/formCarga', mainControlles.formCar)

module.exports = router;