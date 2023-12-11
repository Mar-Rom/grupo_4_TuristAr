const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
const app = express();
const routesMain = require('./src/routes/main');
const routesProduct = require('./src/routes/productDetail');
const routesCarrito = require('./src/routes/carrito');
const routesUsers = require('./src/routes/users');
const PORT = 3030;
const cookieParser = require('cookie-parser');

const session= require("express-session")

const logedMiddleware= require("./src/middleware/logedMiddleware")
const userSessionCheck = require('./src/middleware/cookies/userSessionCheck');
const cookieCheck = require('./src/middleware/cookies/cookieCheck');

app.use(session({
    secret: 'tu_secreto_aqui',
    resave: false, // establecer a false
    saveUninitialized: false // establecer a false
  }));

app.use(logedMiddleware)

app.use(cookieParser());

app.use(cookieCheck);
app.use(userSessionCheck);

app.set("view engine", "ejs");
app.set('views','./src/views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT , () => {
    console.log('Servidor corriendo en el puerto: ' + PORT);
});


app.use(routesMain);

app.use('/products', routesProduct);

app.use('/carrito', routesCarrito);

app.use('/usuario', routesUsers)
