const oracledb = require('oracledb');
const { executeProcedure } = require('../utils/dbUtils');


const consultaProductos = async(req, res) => {
    try {
        const { id } = req.params;
        if (!id || isNaN(Number(id))) {
            return res.status(400).send("El parámetro 'id' es requerido.");
        }
        const params = {
            p_id: id,
            r_nombre: { dir: oracledb.BIND_OUT, type: oracledb.STRING },
            r_precio: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
        };
        const procedure = "BEGIN SISPLAY.TEST.obtener_productos_pr(:p_id, :r_nombre, :r_precio); END;";
        const result = await executeProcedure(procedure, params);

        res.json(result.outBinds);
    } catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).send("Error al obtener productos");
    }
};

const obternerProductos = async(req, res)=>{
    try {
            
    } catch (error) {
        
    }
};

module.exports = {
    consultaProductos,
    obternerProductos
}