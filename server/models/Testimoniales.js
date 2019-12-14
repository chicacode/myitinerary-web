const Sequelize = require('sequelize');

// importar base de datos desde config
// conectarse a Testimoniales
const db = require('../config/database');

const Testimonial = db.define('testimoniales', {
    nombre : {
        type: Sequelize.STRING
    },
    correo : {
        type: Sequelize.STRING
    },
    mensaje : {
        type: Sequelize.STRING
    }
});
module.exports = Testimonial;