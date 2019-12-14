// Necesitamos estos modelos para que sepa de donde viene los datos
const Viaje = require('../models/Viajes');
const Testimonial  = require('../models/Testimoniales');

// esto es un controlador REAL
exports.consultasHomepage = async (req, res) => {
    // crear un arreglo de Promises
    
    const viajes = await Viaje.findAll({ // consulta
        limit: 3
    }); 
    const testimoniales = await Testimonial.findAll({
        limit: 3
    }); 

    res.render('index', { 
        pagina : 'Próximos viajes', 
        clase : 'home',
        viajes, // cuando la llave y el valor se llaman igual se pasa así
        testimoniales
    })
}