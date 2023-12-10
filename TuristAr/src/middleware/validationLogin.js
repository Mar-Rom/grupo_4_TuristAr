const { body,validationResult} = require('express-validator')
// const users = require('../data/users.json')
const bcrypt = require('bcryptjs');

const db= require("../database/models")
const {Op}= require("sequelize");

const validacion = [
    body('email')
    .notEmpty()
    .withMessage('Debes escribir un correo electronico')
    .isEmail()
    .withMessage('Esto no es un correo')
    .custom(async (value, {req}) => {
        const user = await db.User.findOne({where: {email:req.body.email}})
                if(user){
                    return true;
                }else{
                    return false;
                }
    })
    .withMessage('El correo no se encuentra registrado'),

    body('password')
    .notEmpty()
    .withMessage('Debes escribir una contraseña')
    .custom( async (value, { req }) => {
         // Obtiene el usuario almacenado en la solicitud
        const user = await db.User.findOne({where: {email:req.body.email}})
        
        if(user && bcrypt.compareSync(req.body.password ,user.password)){
            return true
        }else{
            return false
        }
        
    })
    .withMessage('La contraseña no coincide con el usuario registrado')
]


const result = async (req, res, next) => {
            // console.log(req.body);
                const errors = validationResult(req);
                // console.log(errors.mapped());
                if (errors.isEmpty()) {
                    const user= await db.User.findOne({where: {email:req.body.email}})
                        req.session.userLoged= user
                        console.log(req.session.userLoged)
                    
                    next();
                } else {
                    res.render("Login", {
                        errors: errors.mapped(),
                        old:req.body
                    });
                }
            };
           

module.exports = {validacion, result}