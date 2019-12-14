const Viaje = require('../models/Viajes');
//         colocando async await
exports.mostrarViajes = async (req, res) => {
   const viajes = await Viaje.findAll() // findAll es un metodo de sequelize que me permite hacer un SELECT y extraer toda la info de la base de datos que estemos consultando
        res.render('viajes', { // se hace en un promise es asincrono
            pagina: 'Próximos viajes', 
            viajes
        });
}// Aqui se exporta el primer metodo

exports.mostrarViaje = async (req, res) => {
    // await detiene que esta linea se ejecute sino se ha traido los datos de la apps
   const viaje = await Viaje.findByPk(req.params.id) // find By Primary Key
    res.render('viaje', {
        viaje
})
} // Aqui se exporta el segundo método