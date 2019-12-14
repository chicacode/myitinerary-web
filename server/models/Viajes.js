const Sequelize = require('sequelize');

// importar base de datos desde config y conectarse
const db = require('../config/database');

// Schema 
const Viaje = db.define('viaje', {
    titulo : {
        type: Sequelize.STRING
    }, 
    precio : {
        type: Sequelize.STRING
    }, 
    fecha_ida : {
        type: Sequelize.DATE
    }, 
    fecha_vuelta : {
        type: Sequelize.DATE
    }, 
    imagen : {
        type: Sequelize.STRING
    },
    descripcion : {
        type: Sequelize.STRING
    },
    disponibles : {
        type: Sequelize.STRING
    },
})

module.exports = Viaje;