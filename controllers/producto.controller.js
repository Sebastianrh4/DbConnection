const getConnection = require('../config/db');

const obtenerProductos = async(req, res) => {
    try {
        const conn = await getConnection(); // Espera a que se establezca la conexión a la base de datos.
        const result = await conn.execute("SELECT * FROM PRODUCTOS", [], {outFormat: 4002});// Espera a que se ejecute la consulta SQL.
        await conn.close();// espera que se cierre la base para continuar 
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener productos");
    }
};

module.exports = {
    obtenerProductos
}