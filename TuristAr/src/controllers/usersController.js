const dataUsers = require('../data/users.json');
const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '..', 'data', 'users.json');
const bcrypt = require('bcryptjs');

module.exports = {
    profile: (req, res) => {
        let userId = req.params.id;
        let usuario = dataUsers.find((user) => user.id == userId);

        res.render('userProfile', {usuario})
    },
    edit: (req, res) => {
        let userId = req.params.id;
        let usuario = dataUsers.find((user) => user.id == userId);

        res.render('editProfile', {usuario})
    },
    update: (req, res) => {
        const {id} = req.params;
        let usuariIndex = dataUsers.findIndex((user)=> user.id == id);
        let usuarioAEditar = dataUsers[usuariIndex];
        //volvemos a hashear en caso de que la contraseña haya sido cambiada
        let band=false; //variables auxiliares
        let hashPassword ="" 
        let usuarioEditado = req.body;
        usuarioEditado.id = parseInt(id);
        usuarioEditado.image = req.file?.filename || usuarioAEditar.image;
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
        console.log(usuarioEditado);

        fs.writeFileSync(userFilePath, JSON.stringify(dataUsers));

        res.redirect('/usuario/' + id);
    }
}