const { body,validationResult} = require('express-validator')
// const users = require('../data/users.json')
const bcrypt = require('bcryptjs');

const db= require("../database/models")
const {Op}= require("sequelize");

const validacion = [
    body('email')
    .notEmpty()
    .withMessage('Debes escribir un correo electrónico')
    .isEmail()
    .withMessage('Esto no es un correo')
    .custom(async (value, { req }) => {
        const user = await db.User.findOne({ where: { email: req.body.email } });
        if (!user) {
            throw new Error('El correo no se encuentra registrado');
        }
        return true;
    }),

    body('password')
    .bail()
    .notEmpty()
    .withMessage('Debes escribir una contraseña')
    .custom((value, { req }) => {
        return db.User.findOne({ where: { email: req.body.email } })
            .then(user => {
                // console.log("contra de DB: " + user.password);
                // console.log("contra del form: " + value);
                // console.log("contraseña verdadera: " + user.password2); // Asegúrate de usar user.password aquí
                // console.log("validacion de contras: "+ bcrypt.compareSync(value, user.password))
                // console.log(value=== user.password2)
                // console.log(bcrypt.compareSync(user.password2,user.password))
                // console.log(user.password=== value)
                if(value=== user.password2)
                {
                    if (user && bcrypt.compareSync(value, user.password)) {
                        return true;
                    } else {
                        throw new Error('El email o la contraseña son incorrectos');
                    }
                }else{
                    throw new Error('El email o la contraseña son incorrectos');
                }
                
            })
    }),
    
]


const result = async (req, res, next) => {
            // console.log(req.body);
                const errors = validationResult(req);
                // console.log(errors.mapped());
                if (errors.isEmpty()) {
                    const user= await db.User.findOne({where: {email:req.body.email}})
                        req.session.userLoged= user
                        // console.log(req.session.userLoged)
                        if(req.body.remember !== undefined){
                            res.cookie('SesionUser', req.session.userLoged, {
                                maxAge: (1000 * 60) * 5
                            });
                        }

                    next();
                } else {
                    res.render("Login", {
                        errors: errors.mapped(),
                        old:req.body
                    });
                }
            };
module.exports = {validacion, result}