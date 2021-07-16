const express = require('express');
const router = express.Router();

//requiero el archivo controller para poder acceder a sus metodos
const { list, detail, sale }= require ( '../controllers/productsController')

//enrutamiento
router.get('/', list);
router.get('/detail/:id', detail);
router.get('/sale', sale)

module.exports = router;