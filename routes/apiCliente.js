var express = require('express');
var router = express.Router();
let apiClientesController = require('../controllers/apiControllers/clientesController')



router.get('/lista', apiClientesController.listaClientes);

router.get('/detalle/?:id', apiClientesController.detalleCliente);



module.exports = router;
