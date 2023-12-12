const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers');
const multers = require("multer");
const upload = require('../middleware/multer');
const {arrayValidaciones, validateCreateForm}=require("../middleware/validationProductsCreate");
const {validacionesEdit, validate}=require("../middleware/validationProductsEdit");

router.get('/', productControllers.all);

// encontrar forma de requerir Multer o storage:4,5



router.get('/detail/:id', productControllers.detail);

//econtrar producto

router.get('/search', productControllers.search);

// crar un producto y guardarlo

router.get('/create', productControllers.crear);
router.post('/', upload.array("image", 10 ),arrayValidaciones, validateCreateForm,productControllers.agregar);
//editar

router.get('/edit/:id', productControllers.edit)
router.put('/edit/:id',upload.array("image", 10 ),validacionesEdit, validate,productControllers.guardarCambios);

router.delete("/delete/:id", productControllers.delete);

router.get("/delete/:id", productControllers.delete)


module.exports = router;