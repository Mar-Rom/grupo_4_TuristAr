const products = require('../data/productsData.json');

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
    }
}