const { check, body, validationResult } = require("express-validator");
const products = require('../data/productsData.json');

/* Validaciones */
const validacionesEdit = [
    body('name')
    .notEmpty()
    .withMessage("El campo nombre no debe estar vacio")
    .isLength({ min: 5 }) 
    .withMessage("El Nombre debe tener minimo 3 caracteres"),
body("price")
    .notEmpty()
    .withMessage("Este campo no debe estar vacio"),
body("street")
    .notEmpty()
    .withMessage("Este campo no debe estar vacio")
    .isLength({ min: 5 })
    .withMessage("La direccion debe tener minimo 5 caracteres"),
body("persons")
    .notEmpty()
    .withMessage("Este campo no debe estar vacio")
    .isNumeric()
    .withMessage("El campo debe estar compuesto por numeros"),
body('description')
    .notEmpty()
    .withMessage("El campo apellido no debe estar vacio")
    .isLength({ min: 20 }) 
    .withMessage("El Apellido debe tener minimo 3 caracteres"),
body ("locality")
    .notEmpty()
    .withMessage("El campo no deber estar vacio")
    .isLength({min: 5})
    .withMessage("El nombre debe tener minimo 5 caracteres"),

];

const validate = (req, res, next) => {
    // console.log(req.body);
    const errors = validationResult(req);
    // console.log(errors.mapped());
    const {id}=req.params;
    console.log(req.params);
    const alojamiento = products.find((prod) => prod.id == id);
    console.log(alojamiento)
    if (errors.isEmpty()) {
        next();
    } else {
        res.render("formEdit", {
            errors: errors.mapped(),
            old:req.body,
            alojamiento:alojamiento
            
        });
        
    }
};

module.exports = {
    validacionesEdit,
    validate
};