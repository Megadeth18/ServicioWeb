const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'escolar',
    'backenduser',
    'superpassword',
    {
        host: 'localhost',
        dialect: 'mysql'
    });
sequelize
    .authenticate()
    .then(() => {
        console.log('Se conectó exitosamente');
    })
    .then(() => {
        cierra();
    })
    .catch(err => {
        console.error('Error al conectarse a la BD:', err);
    });
