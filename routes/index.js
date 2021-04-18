var express = require('express');
var router = express.Router();

/* MIDDLEWARES */
const profileMiddleware = require('../middlewares/profileMiddleware');


/* GET home page. */
router.get('/', profileMiddleware ,function(req, res, next) {
  res.render('users/info', {             
    nombre: req.session.nombre,
    apellido: req.session.apellido,
    domicilio: req.session.domicilio,
    email: req.session.email, });
});



module.exports = router;
