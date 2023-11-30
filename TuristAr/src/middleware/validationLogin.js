const { body,validationResult} = require('express-validator')
const users = require('../data/users.json')
const bcrypt = require('bcryptjs');
const validacion = [
    body('email')
    .notEmpty()
    .withMessage('Debes escribir un correo electronico')
    .isEmail()
    .withMessage('Esto no es un correo')
    .custom((value, {req}) => {
        const user = users.find((user) => user.email == req.body.email);
        if (user) {
            return true;
        }else {
            return false;
        }

    })
    .withMessage('El correo no se encuentra registrado'),

    body('password')
    .notEmpty()
    .withMessage('Debes escribir una contraseña')
    .custom((value, { req }) => {
         // Obtiene el usuario almacenado en la solicitud
        const user = users.find(user => user.email === req.body.email)
        console.log(user);
        if(user && bcrypt.compareSync(req.body.password ,user.password)){
            return true
        }else{
            return false
        }
        
    })
    .withMessage('La contraseña no coincide con el usuario registrado')
]

const result = (req, res, next) => {
            console.log(req.body);
                const errors = validationResult(req);
                console.log(errors.mapped());
                if (errors.isEmpty()) {
                    next();
                } else {
                    res.render("Login", {
                        errors: errors.mapped(),
                        old:req.body
                    });
                }
            };
           

module.exports = {validacion, result}