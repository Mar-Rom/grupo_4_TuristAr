const express = require('express');
const app = express();

const products = require('../data/productsData.json');

const path = require('path');
const fs = require('fs');


//const groupsModel = jsonTable('groups');

module.exports = {
    all: (req,res) => {
        res.render('productsAll',{
            products
        });
    },
    detail: (req, res) => {
        let productoId = req.params.id;
        let producto = products.find((prod) => prod.id == productoId);
        res.render('productDetail', {producto: producto})
    },
    crear: (req, res) => {
        res.render('formCarga');
    },
    agregar: (req, res) => {
        // console.log(req.body);
        
        res.redirect('/products')
    },
    edit: (req,res)=>{
        res.render('formEdit');
    },
    guardarCambios: (req, res) => {
        res.redirect('/');
    },

    }

    
    
      
      
    


    
/*     upload: (req, res) => {
    //perdon por los cambios, atte = martin y facu :)
    const uploadFile = req.files.map((file) => ({
        
            "id": ,
            "name": ,
            "description": ,
            "image": ".jpg",
            "imageArray": [
                ".jpg",
                ".jpg",
                ".jpg"
            ],
            "price": ,
            "personas": ,
            "include": ["cocina","banio","wifi","waterHot"],
            "anfitrion": ,
            "provin": "",
            "localidad":""
        })}


    upload: (req, res) => {
        // ???
    } */

