const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
const app = express();

const routesMain = require('./src/routes/main');
const routesProduct = require('./src/routes/productDetail');
const routesCarrito = require('./src/routes/carrito');
const routesUsers = require('./src/routes/users');
const routesFav= require('./src/routes/favoritos');

const routesUserAPI = require('./src/routes/routesApis/userApi')
const routesProductsAPI = require('./src/routes/routesApis/productsApi')

const PORT = 3030;
app.use('/uploads', express.static(path.join(__dirname, '../public/img')));
/**
 * CORS: es un paquete que simplifica la configuración de políticas de acceso cruzado (CORS) en 
 * Express.
 */
const cors = require("cors");

/**
 * Especifica que se permite el acceso desde cualquier origen (origin: "*")
 * Esto permite que cualquier dominio realice solicitudes al servidor
 */
let corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

/**
 * Esto define una función llamada allowCrossDomain, que actúa como un middleware personalizado.
 * La función toma tres argumentos: req (la solicitud), res (la respuesta) y next (una función que
 * permite pasar la solicitud al siguiente middleware
 */
let allowCrossDomain = function(req, res, next) {
  /**
   *  Se establecen varias cabeceras de respuesta (res.header) para permitir que diferentes dominios 
   *  realicen solicitudes a tu servido
   */
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
    res.header('Access-Control-Allow-Headers', "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    next();
  }

  // Se ejecuta el middleware creado
app.use(allowCrossDomain);
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

app.use('/usuario', routesUsers);
app.use('/favorite', routesFav);

app.use ('/api', routesUserAPI)
app.use ('/api', routesProductsAPI)



