//requiero express para trabajar con rutas
const express = require('express');
const router = express.Router();

//requiero el archivo controller para poder acceder a sus metodos
const { index } = require('../controllers/indexController');

//enrutamiento de index
router.get('/', index);

//exporto la ruta
module.exports = router;