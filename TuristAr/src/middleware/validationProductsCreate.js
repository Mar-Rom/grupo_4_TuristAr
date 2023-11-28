const { check, body, validationResult } = require("express-validator");


/* Validaciones */
const arrayValidaciones = [
    body('name')
        .notEmpty()
        .withMessage("El campo nombre no debe estar vacio")
        .isLength({ min: 5 }) 
        .withMessage("El Nombre debe tener minimo 3 caracteres"),
    body("price")
        .notEmpty()
        .withMessage("Este campo no debe estar vacio"),

    body('description')
        .notEmpty()
        .withMessage("El campo apellido no debe estar vacio")
        .isLength({ min: 20 }) 
        .withMessage("El Apellido debe tener minimo 3 caracteres"),
        
    body("anfitrion")
        .notEmpty()
        .withMessage("El nombre a cargo es obligatorio"),
    body ("localidad")
        .notEmpty()
        .withMessage("El campo no deber estar vacio")
        .isLength({min: 5})
        .withMessage("El nombre debe tener minimo 5 caracteres"),

];

const validateCreateForm = (req, res, next) => {
    console.log(req.body);
    const errors = validationResult(req);
    console.log(errors.mapped());
    if (errors.isEmpty()) {
        next();
    } else {
        res.render("formCarga", {
            errors: errors.mapped(),
            old:req.body
        });
    }
};

module.exports = {
    arrayValidaciones,
    validateCreateForm
};