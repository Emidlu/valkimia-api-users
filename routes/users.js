var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController')

/* MIDDLEWARES */
const profileMiddleware = require('../middlewares/profileMiddleware');


/* GET users listing. */
router.get('/login', usersController.loginForm);
router.post('/login', usersController.userAuth);

router.get('/register', usersController.registerForm);
router.post('/register', usersController.register);

router.get('/profile', profileMiddleware, usersController.editForm);
router.post('/profile', profileMiddleware, usersController.update);

router.post('/logout', usersController.logout);

router.post('/delete', usersController.delete);





module.exports = router;
