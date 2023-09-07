const products = require('../data/productsData.json');

module.exports = {
    all: (req,res) => {
        res.render('productsAll',{
            products: products
        });
    },
    detail: (req, res) => {
        res.render('productDetail')
    },
    crear: (req, res) => {
        res.render('formCarga');
    },
    agregar: (req, res) => {
        res.redirect('/')
    },
    edit: (req,res)=>{
        res.render('formEdit');
    },
    guardarCambios: (req, res) => {
        res.redirect('/');
    }
}