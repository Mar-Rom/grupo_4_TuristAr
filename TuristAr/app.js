const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT , () => {
    console.log('Servidor corriendo en el puerto: ' + PORT);
});

app.get("/", (req, res) => {
    let htmlHome= path.resolve(__dirname, "./views/home.html");
    res.sendFile(htmlHome);
})

app.get("/productDetail", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"));
})