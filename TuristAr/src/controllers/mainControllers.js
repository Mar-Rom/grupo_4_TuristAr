const data = require("../data/productsData.json");

module.exports = {
    home: (req, res) => {
        const dataProducts= data
        res.render('home', {
            hospedajes: dataProducts
        });
    },
    login : (req, res) => {
        res.render('login')
        },
        register: (req, res) => {
        res.render('Register')
        },
        user: (req, res) => {
        res.redirect('home')
        },
        valid: (req, res) => {
        res.render('Valid')
        }
}