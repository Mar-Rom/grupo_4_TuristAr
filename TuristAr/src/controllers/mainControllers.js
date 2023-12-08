const fs = require('fs');
const path = require('path');
const data = require("../data/productsData.json");
const users = require("../data/users.json");
const bcrypt = require('bcryptjs');
const productsFilePath = path.join(__dirname, '..', 'data', 'users.json');
/////////BASE DE DATOS///////
const db= require("../database/models")
const {Op}= require("sequelize");

module.exports = {
    home: (req, res) => {
        const dataProducts = data
        res.render('home', {
            hospedajes: dataProducts
        });
    },
    login: (req, res) => {
        const error = req.query.error;
        res.render('login',{error})
    },
    processLogin: (req, res) => {
        res.redirect('/')
    },
    register: (req, res) => {
        res.render('Register')
    },
    createUser:async (req, res) => {
        const hashPass = bcrypt.hashSync(req.body.password, 10)
        let avatar;
        if (req.body.genre == "Mujer") {
            avatar = "women-default.png"
        } else if (req.body.genre == "Hombre") {
            avatar = "man-default.png"
        } else {
            avatar = "default.webp"
        }
        if (bcrypt.compareSync(req.body.password2, hashPass)) {
            const newUser = await db.User.create({...req.body,
            password:hashPass,
            image: req.file?.filename || avatar})

        }
        return res.redirect('/login')

    },
    user: (req, res) => {
        res.redirect('home')
    },
    valid: (req, res) => {
        res.render('Valid')
    },
    formCar: (req, res) => {
        res.render('formCarga')
    }
}


