/* const express = require('express');
const app = express(); */

// const products = require('../data/productsData.json');

const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '..','data','productsData.json');

const db= require("../database/models")
const {Op}= require("sequelize");

const Lodging = require('../database/models/Lodging');

const Lodgings = db.Lodging;

module.exports = {
    all: (req, res) => {
        Lodgings.findAll({
            include: ["images", "services"],
            // raw:true,         // HACE QUE POR CADA FILA DE IAMAGES LO TOME COMO UN PRODUCTS
            // nest: true,
        }) //aca se usa el alias creado en la configuracion del modelo 
            .then(products => {
                console.log(products) //como traer las peliculas tardara mucho le digo a JS que una vez que se termine la linea de arriba se ejecute esta
                res.render('productsAll', {products})//todo el   db.Movie.findAll() se almacena en la variable movies, es decir todas las pelis
            })
    },
   
    detail: async (req, res) => {
        let productoId = req.params.id;
        let producto = await db.Lodging.findByPk(productoId,{
            include: ["images", "services"],
        });
        
        res.render('productDetail', {producto: producto})
    },

    search: async (req, res) => {
        /* console.log(req.query.destino); */
        const destino = req.query.destino;
        let productos = await db.Lodging.findAll({
            include: ["images", "services"]
        })
        let busquedas = productos.filter((prod) => prod.locality.toLowerCase() == destino.toLowerCase() || prod.province.toLowerCase() == destino.toLowerCase());
        /* console.log(busquedas[0].images[0].name); */
        res.render('busquedas', {busquedas})
    }, 
    
    crear: (req, res) => {
        
        res.render('formCarga');
    },
    agregar: async (req, res) => {
        console.log(req.session.userLoged)
        
        if (req.session.userLoged) {
            const hospedaje = await db.Lodging.create({...req.body, id_user: 1}); // id provisorio
    
            console.log(req.files);
            console.log(hospedaje.id_lodging);
    
            if (req.files && req.files.length > 0) {
                for (let i = 0; i < req.files.length; i++) {
                    await db.Image_lodging.create({
                        name: req.files[i].filename,
                        id_lodging: hospedaje.id_lodging
                    });
                }
            }
    
            res.redirect("/products");
        } else {
            res.redirect("/login?error=notLoggedIn"); //O redireccionar a otro lugar si no hay un usuario
        }
    },
    edit: (req,res)=>{
        const {id} = req.params;
        const alojamiento = products.find((prod) => prod.id == id);

        res.render('formEdit', {alojamiento});
    },
    guardarCambios: (req, res) => {
        
        
        const {id} = req.params;
        console.log(req.params);
        const indexProduct = products.findIndex((prod) => prod.id == id);
        let productoAEditar = products[indexProduct];

        let editado = req.body;
        editado.id = parseInt(id);
        editado.image = req.file?.filename || productoAEditar.image ;
        editado.imageArray = productoAEditar.imageArray;
        editado.description = editado.description  != '' ? editado.description : productoAEditar.description; 
        //por ahora... igual todo esto quedará obsoleto cuando implementemos base de datos jaja

        //console.log(req.body);

        for(let propiedad in productoAEditar){
            if(productoAEditar.hasOwnProperty(propiedad)){
                productoAEditar[propiedad] = editado[propiedad];
            }
        }

        fs.writeFileSync(productsFilePath,JSON.stringify(products));

        res.redirect('/products'); //redireccionar al producto
    },    
    delete: (req, res) => {
        const {id} = req.params;

        const indexProducto = products.findIndex((prod) => prod.id == id);
        
       products.splice(indexProducto, 1);
   
       fs.writeFileSync(productsFilePath,JSON.stringify(products));

       res.redirect("/products")
   }
}