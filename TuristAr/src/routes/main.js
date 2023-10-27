const express = require('express');
const router = express.Router();
const mainControlles = require('../controllers/mainControllers');
const {arrayValidaciones, validateCreateForm}=require("../middleware/validationRegister");
const upload = require('../middleware/multerUser');
//  ↓↓↓ router.get('/', MainController) ↓↓↓
router.get('/', mainControlles.home);


router.get('/login', mainControlles.login)


router.get('/register', mainControlles.register)
router.post('/register',upload.single('image'),arrayValidaciones,validateCreateForm, mainControlles.createUser)

router.get('/valid', mainControlles.valid)  

router.get('/formCarga', mainControlles.formCar)

module.exports = router;