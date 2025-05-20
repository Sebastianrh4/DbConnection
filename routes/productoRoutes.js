const express = require('express');
const router = express.Router();
const { obtenerProductos  } = require('../controllers/producto.controller');

router.get('/productos', obtenerProductos);

module.exports = router;