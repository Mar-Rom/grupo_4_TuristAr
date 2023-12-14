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
        let producto = await db.Lodging.findByPk(productoId,{include:["images","services"]});
        let user = req.session.userLoged;
        res.render ('carrito2', {
            producto: producto,
            usuario: user
        })
    },
    resumen: async (req, res) => {
        let productoId = req.params.id;
        let producto = await db.Lodging.findByPk(productoId,{include:["images","services"]})
        let userPay = req.session.userLoged;
        res.render ('carrito3', {
            producto: producto,
            usuario: userPay
        })
    },
    reserve: async (req, res) => {
        let idLodging = req.params.id;
        if(req.session.userLoged){
            const {fechaEntrada, fechaSalida, huespedes} = req.body;
            let idUser = req.session.userLoged.id
            const reserved = await db.Reserve.create({
                id_guest: idUser,
                id_lodging: idLodging,
                check_in: fechaEntrada,
                check_out: fechaSalida,
                count_persons: huespedes
            });
            res.redirect('/carrito/pago/' + idLodging);
        }else {
            res.redirect('/login');
        }
        
        /* console.log(idLodging);
        console.log(req.body);
        console.log(req.session.userLoged); */

    }
}