// const dataUsers = require('../data/users.json');
const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '..', 'data', 'users.json');
const bcrypt = require('bcryptjs');

/////////BASE DE DATOS///////////
const db= require("../database/models")
const {Op, Association}= require("sequelize");

module.exports = {
    profile: async (req, res) => {
        let userId = req.params.id;
        let usuario = await db.User.findByPk(userId);
        
        let producto = await db.Lodging.findAll({
            where: { id_user: usuario.id },
            include: ["images", "services"]
        });
        
        // Cargar los favoritos del usuario
        let favoritosUsuario = await db.User.findByPk(userId, {
            include: {
                model: db.Lodging,
                as: "favorites", // Utiliza el alias definido en la asociación
            }
        });
        console.log(favoritosUsuario)
    
        res.render('userProfile', { usuario, producto, favoritosUsuario });
    },
    
    edit: async(req, res) => {
        let userId = req.params.id;
        let usuario = await db.User.findByPk(userId);

        res.render('editProfile', {usuario})
    },
    update: async(req, res) => {
        const {id} = req.params;
        // let usuariIndex = dataUsers.findIndex((user)=> user.id == id);
        let usuarioAEditar = await db.User.findByPk(id);;
        //volvemos a hashear en caso de que la contraseña haya sido cambiada
        let avatar;
        if (req.body.genre == "Mujer") {
            avatar = "women-default.png"
        } else if (req.body.genre == "Hombre") {
            avatar = "man-default.png"
        } else {
            avatar = "default.webp"
        }
        let band=false; //variables auxiliares
        let hashPassword ="" 
        let usuarioEditado = req.body;
        usuarioEditado.id = parseInt(id);
        usuarioEditado.image = req.file?.filename || avatar;
        // verifico si hay algun cambio en el campo de la constraseña 
        if (usuarioAEditar.password2 != req.body.password)
        {
            hashPassword = bcrypt.hashSync(req.body.password, 10);
            band=true;
            usuarioEditado.password2=req.body.password;
        }
        //si la bandera band cambia a true la contraseña se actualizara si no seguira igual
        usuarioEditado.password2=  band?req.body.password: usuarioAEditar.password2
        usuarioEditado.password=  band?hashPassword: usuarioAEditar.password;
        
        //el password2 debe ir primero de otro modo password y password2 tendran el valor de la contraseña hasheda


        for(let propiedad in usuarioAEditar){
            if(usuarioAEditar.hasOwnProperty(propiedad)){
                usuarioAEditar[propiedad] = usuarioEditado[propiedad];
            }
        }
        // console.log(usuarioEditado);
        const editado= await db.User.update(usuarioEditado,{where: {id:req.params.id}})


        

        res.redirect('/usuario/' + id);
    }
}