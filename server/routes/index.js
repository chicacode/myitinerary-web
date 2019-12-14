const express = require('express');
const router = express.Router();

/** Controladores **/
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

// Exportar las rutas 
module.exports = function(){
    router.get('/', homeController.consultasHomepage);
    router.get('/nosotros', nosotrosController.infoNosotros); 
    // creando la ruta de viajes
    router.get('/viajes', viajesController.mostrarViajes);
    // ruta de los viajes según ids
    router.get('/viajes/:id', viajesController.mostrarViaje); 
    //  ruta para los testimoniales
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    // Cuando se llena el Form y se envia
    router.post('/testimoniales', testimonialesController.agregarTestimonial)

    return router;
}

