const db = require("../../database/models");
const bcrypt = require('bcryptjs');

module.exports = {
    async getAllUsers(req, res) {
        try {
            const users = await db.User.findAll()
            .then(movies => {
                let respuesta = {
                    meta: {
                        status : 200,
                        total: movies.length,
                        url: 'api/usuarios'
                    },
                    data: movies
                }
                    res.json(respuesta);
                })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getUserById(req, res) {
        try {
            const userId = req.params.id;
            const user = await db.User.findByPk(userId)
            .then(movies => {
                let respuesta = {
                    meta: {
                        status : 200,
                        total: movies.length,
                        url: 'api/usuarios/:id'
                    },
                    data: movies
                }
                    res.json(respuesta);
                })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

     createUser(req, res) {
        try {
            const hashPass = bcrypt.hashSync(req.body.password, 10)
            let avatar;
            let genero;
            if (req.body.genre == "Mujer") {
                avatar = "women-default.png"
                genero="Mujer"
            } else if (req.body.genre == "Hombre") {
                avatar = "man-default.png"
                genero="Hombre"
            } else {
                avatar = "default.webp"
                genero= "-"
            }
            if (bcrypt.compareSync(req.body.password2, hashPass)) {
                 db.User.create({...req.body,
                password:hashPass,
                image: req.file?.filename || avatar,
                genre: genero })
                .then(confirm => {
                    let respuesta;
                    if(confirm){
                        respuesta ={
                            meta: {
                                status: 200,
                                total: confirm.length,
                                url: 'api/movies/create'
                            },
                            data:confirm
                        }
                    }else{
                        respuesta ={
                            meta: {
                                status: 200,
                                total: confirm.length,
                                url: 'api/movies/create'
                            },
                            data:confirm
                        }
                    }
                    
                })  
            }
            res.json(respuesta);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateUser(req, res) {
        try {
            const userId = req.params.id;
            // Lógica para actualizar un usuario existente por ID
            // Recuperar datos de req.body y actualizar en la base de datos
            // Ejemplo: await db.User.update(req.body, { where: { id: userId } });
            res.json({ message: 'Usuario actualizado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteUser(req, res) {
        try {
            const userId = req.params.id;
            // Lógica para borrar un usuario por ID
            // Ejemplo: await db.User.destroy({ where: { id: userId } });
            res.json({ message: 'Usuario eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
