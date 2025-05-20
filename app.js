/* 1. Importa las dependencias necesarias (express, dotenv, etc.).
2. Configura el middleware para procesar JSON.
3. Define las rutas principales.
4. Inicia el servidor con app.listen. */

const express = require('express');
require('dotenv').config();// Carga las variables desde un archivo .env.
const productoRoutes = require('./routes/productoRoutes');
const port = 3000;

const app = express();
app.use(express.json());
app.use('/api', productoRoutes);

app.listen(port, ()=>{
    console.log('Servidor corriendo en http://localhost',port);
})