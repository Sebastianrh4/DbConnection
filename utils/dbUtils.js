const oracledb = require('oracledb');
const getConnection = require('../config/db');

const executeProcedure = async (procedure, params)=>{
    let conn;
    try {
        conn = await getConnection();
        const result = await conn.execute(procedure, params, {
            outFormat: oracledb.OBJECT,
            autoCommit: true
        });
        return result
    } catch (error) {
        console.error('Error al ejecutar el procedimiento: ', error);
        throw error;
    } finally {
        if(conn){
            try {
                await conn.close();
            } catch (error) {
                console.error('Error al cerrar la conexion: ', coseError);
            }
        }
    }
};

module.exports = {executeProcedure};