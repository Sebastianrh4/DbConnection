const express = require('express');
const router = express.Router();
const controlador = require('../controllers/producto.controller');

router.get('/productos/:id', controlador.consultaProductos);

module.exports = router;