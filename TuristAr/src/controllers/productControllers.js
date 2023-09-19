const products = require('../data/productsData.json');

const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '..','data','productsData.json');

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
        const newProduct= req.body;
        newProduct.id= `${products.length + 1}`
        newProduct.image= "default-img.webp"
        console.log(newProduct);
        //agrego al array
        products.push(newProduct);
        //actualizo el json
        fs.writeFileSync(productsFilePath,JSON.stringify(products));
        
        res.redirect('/products')
    },
    edit: (req,res)=>{
        res.render('formEdit');
    },
    guardarCambios: (req, res) => {
        res.redirect('/');
    }
}