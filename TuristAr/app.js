const express = require('express');
const path = require('path');
const app = express();
const routesMain = require('./src/routes/main');
const routesProduct = require('./src/routes/productDetail');
const routesCarrito = require('./src/routes/carrito');
const PORT = 3000;

app.set("view engine", "ejs");
app.set('views','./src/views');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT , () => {
    console.log('Servidor corriendo en el puerto: ' + PORT);
});


app.use(routesMain);

app.use('/product', routesProduct);

app.use('/carrito', routesCarrito);
