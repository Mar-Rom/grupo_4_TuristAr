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
                // console.log(products) //como traer las peliculas tardara mucho le digo a JS que una vez que se termine la linea de arriba se ejecute esta
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
    crear: (req, res) => {
        
        res.render('formCarga');
    },
    agregar: async (req, res) => {
        // console.log(req.session.userLoged)
        
        if (req.session.userLoged) {
            console.log(req.body)
            const hospedaje = await db.Lodging.create({...req.body, id_user: req.session.userLoged.id }); // id provisorio
    
            // console.log(req.files);
            // console.log(hospedaje.id_lodging);
    
            if (req.files && req.files.length > 0) {
                for (let i = 0; i < req.files.length; i++) {
                    await db.Image_lodging.create({
                        name: req.files[i].filename,
                        id_lodging: hospedaje.id_lodging
                    });
                }
            }else{
                await db.Image_lodging.create({
                    name: "default-img.webp",
                    id_lodging: hospedaje.id_lodging
                });
            }

            // if(req.body.include.lenght > 0){
            //     for (let i = 0; i < req.body.include.length; i++) {
            //         await db.Include_Lodging.create({
            //             id_include: req.body.include[i],
            //             id_lodging: hospedaje.id_lodging
            //         });
            //     }
            // }
        
    
            res.redirect("/products");
        } else {
            res.render("Login", { error: req.query.error }); //O redireccionar a otro lugar si no hay un usuario
        }
    },
    edit:async (req,res)=>{
        const {id} = req.params;
        const alojamiento = await db.Lodging.findByPk(id);

        res.render('formEdit', {alojamiento});
    },
    guardarCambios: async (req, res) => {
        
        
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
        const productEditado= await db.Lodging.update(editado, {where:{id_lodging: id}});

        // fs.writeFileSync(productsFilePath,JSON.stringify(products));

        res.redirect('/products'); //redireccionar al producto
    },    
    delete: async(req, res) => {
        const {id} = req.params;

        const images = await db.Image_lodging.findAll({where:{id_lodging:id}})
        await db.Image_lodging.destroy({where:{id_lodging: id}})

        await db.Lodging.destroy({where: {id_lodging: id}})
        
        

        for (const image of images) {
            if (image.name != "default-img.webp") {
                const imagePath = path.join(__dirname, '../../public/images/products', image.name);
                try {
                    await fs.unlink(imagePath, (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log(`Archivo ${imagePath} eliminado`);
                        }
                    });
                } catch (err) {
                    console.error(err);
                }
            }
        }
        
        res.redirect('/products')
        
    //    products.splice(indexProducto, 1);
   
    //    fs.writeFileSync(productsFilePath,JSON.stringify(products));

    //    res.redirect("/products")
   }
}