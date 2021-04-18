var express = require('express');
var router = express.Router();
let apiFacturasController = require('../controllers/apiControllers/facturasController')




router.get('/lista', apiFacturasController.listaFacturas);

router.get('/detalle/?:id', apiFacturasController.detalleFactura);

router.post('/generate', apiFacturasController.generateFactura);





module.exports = router;
