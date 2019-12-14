// Archivo más imprtante de configuración
// importar Express
const express = require('express'); 
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes');
const configs = require('./config');
const db = require('./config/database');

require('dotenv').config({ path: 'variables.env'})

// // importar base de datos desde config y conectarse

db.authenticate()
    .then(()=> console.log('DB conectada')) // los console.log de node lo envia a terminal hace que reiniciar el servidor
    .catch(error => console.log(error));

// Sequelize https://sequelize.org/v5/manual/querying.html

// Configurar Express
const app = express();

// Habilitar Pug
app.set('view engine', 'pug');

// Añadir las vistas
app.set('views', path.join(__dirname, './views') );

// cargar el css una carpeta estatica llamada public
app.use(express.static('public')); // encuentra archivos estaticos

// Validar si estamos en Desarrollo o en Producción
const config = configs[app.get('env')]; // variable que existe en node para detectar el ambiente

// Creamos la variable para el sitio web
app.locals.titulo = config.namewebsite;

// Muestra el año actual soporta bien JavaScript
// y genera la ruta
app.use((req, res, next)=> {
    // crear nueva fecha
    const date = new Date();

    // Creación de variables para pasar por templates
    res.locals.actualDate = date.getFullYear(); // retorna le año actual
    // res.locals.sayHi = 'Hola';
    res.locals.ruta = req.path; // retorna lo que tenga en /testimoniales etc

    // console.log(res.locals);
    return next(); // esto sigue ejecutando la funcion
})

// Ejecutamos el bodyParser que sirve para
app.use(bodyParser.urlencoded( {extended:true}) );


// Cargar las rutas
app.use('/', routes());
// PASOS PARA PRODUCCIÓN
/** Puerto y Host para la APP */
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000; // no sabemos que puerto nos va a dar heroku
// ajustes para decirle a la app que debe correr en determinado puerto
app.listen(port, host, () => {
    console.log('El servidor está funcionando');
});