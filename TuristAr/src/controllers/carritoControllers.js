// const products = require('../data/productsData.json');

const db= require("../database/models")
const {Op}= require("sequelize");

module.exports = {
    datos: async (req, res) => {
        let productoId = req.params.id;
        let producto = await db.Lodging.findByPk(productoId,{include:["images","services"]})
  
        res.render ('carrito1', {producto: producto})
    },
    pago: async(req, res) => {
        let productoId = req.params.id;
        let producto = await db.Lodging.findByPk(productoId,{include:["images","services"]})
        res.render ('carrito2', {
            producto: producto
        })
    },
    resumen: async (req, res) => {
        let productoId = req.params.id;
        let producto = await db.Lodging.findByPk(productoId,{include:["images","services"]})
        res.render ('carrito3', {
            producto: producto
        })
    }
}