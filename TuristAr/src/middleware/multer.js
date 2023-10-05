const express = require('express');
const app = express();


const router = Router();
const { Router } = require("express");
const multer = require("multer");

const products = require("../controllers/productController.js");    // REQUIRE PRODUCTS

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  });

  const upload = multer({ storage: storage });

 // Router.post = ("/uploads", upload.any());

app.post('/productsData.json', upload.single('archivo'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No se ha subido ningún archivo.');
  }

  res.send('Archivo subido con éxito.');
});


module.exports = router;
  