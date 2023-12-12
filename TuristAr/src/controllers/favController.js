const fs = require('fs');
const path = require('path');

const db= require("../database/models")
const {Op}= require("sequelize");

module.exports = {
    create: async (req,res)=>{
        const {id} = req.params;
        console.log(id);
        if (req.session.userLoged){
            
            await db.Favorite.create({id_user:req.session.userLoged.id, id_lodging:id});
        }
        res.redirect(`/products/detail/${id}`)
    },
    delete: async (req,res)=>{
        const {id} = req.params;
        console.log("el id es: " + id)
        if (req.session.userLoged){
            await db.Favorite.destroy({where:{id_user:req.session.userLoged.id, id_lodging:id}});
        }
        res.redirect(`/products/detail/${id}`)
    }
}