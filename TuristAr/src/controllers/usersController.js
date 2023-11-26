const dataUsers = require('../data/users.json');
const fs = require('fs');
const path = require('path');
const userFilePath = path.join(__dirname, '..', 'data', 'users.json');

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

        let usuarioEditado = req.body;
        usuarioEditado.id = parseInt(id);
        usuarioEditado.image = req.file?.filename || usuarioAEditar.image;

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