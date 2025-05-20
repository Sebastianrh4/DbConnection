/* 1. Importa el cliente de base de datos (oracledb en este caso).
2. Define una función para obtener la conexión.
3. Usa las variables de entorno (process.env) para mantener seguras las credenciales.
4. Exporta la función para usarla en otros archivos. */

const oracledb = require('oracledb');
require('dotenv').config();

async function getConnection(){
    return await oracledb.getConnection({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        connectString: process.env.DB_CONNECT__STRING
    });
}

module.exports = getConnection;