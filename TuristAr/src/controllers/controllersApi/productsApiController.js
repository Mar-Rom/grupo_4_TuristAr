const db = require("../../database/models");
const fs = require('fs');
const path = require('path');

module.exports = {
    all: async (req, res) => {
        try {
            const products = await db.Lodging.findAll({
                include: ["images", "services","user"]
            })
            .then(movies => {
                let respuesta = {
                    meta: {
                        status : 200,
                        total: movies.length,
                        url: 'api/products'
                    },
                    data: movies
                }
                    res.json(respuesta);
                })
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    detail: async (req, res) => {
        try {
            const productoId = req.params.id;
            const producto = await db.Lodging.findByPk(productoId, {
                include: ["images", "services"],
            })
            .then(movie => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: movie.length,
                        url: '/api/movie/:id'
                    },
                    data: movie
                }
                res.json(respuesta);
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    search: async (req, res) => {
        try {
            const destino = req.query.destino;
            const productos = await db.Lodging.findAll({
                include: ["images", "services"]
            });
            const busquedas = productos.filter((prod) => prod.locality.toLowerCase() === destino.toLowerCase() || prod.province.toLowerCase() === destino.toLowerCase())
            .then(movie => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: movie.length,
                        url: '/api/products/search'
                    },
                    data: movie
                }
                res.json(respuesta);
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Resto de los métodos del controlador según la necesidad
    // ...

    crear: async (req, res) => {
        try {
            // Lógica para agregar un nuevo producto
            // ...
            res.status(201).json({ message: "Producto creado correctamente" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    edit: async (req, res) => {
        try {
            const { id } = req.params;
            const alojamiento = await db.Lodging.findByPk(id, { include: ["services", "images"] });
            res.json(alojamiento);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    guardarCambios: async (req, res) => {
        try {
            const { id } = req.params;
            // Lógica para guardar cambios en un producto
            // ...
            res.json({ message: "Cambios guardados correctamente" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            // Lógica para eliminar un producto
            // ...
            res.json({ message: "Producto eliminado correctamente" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

};
