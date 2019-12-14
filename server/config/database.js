// configuración Bases de Datos
const Sequelize = require('sequelize'); // importamos sequelize para utilizarlo
require('dotenv').config({ path: 'variables.env'})

console.log(process.env.BD_HOST)
// Se pasan los parametros de la base de datos en phpmyadmin
//                              nombre BBDD        user    password
module.exports = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
    // Configuracion de sequelize
    host: process.env.BD_HOST, 
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false

}); // lo exportamos como un objeto para usarlo en los demás archivos.titulo
