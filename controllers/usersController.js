let db = require('../database/models');
const bcrypt = require('bcrypt');
let cityManagerfunction = require('../functions/cityManagerFunction')


let usersControllers = {

    loginForm: async (req, res) => {
        res.render('users/login', {
            alert:false
        });
    },

    userAuth: async (req, res) => {
        try {
            const cliente = await db.Cliente.findAll({
                where: {
                    email: req.body.email,
                    habilitado: true
                }
            })

            if (req.body.password == cliente[0].dataValues.password) {
                req.session.email = req.body.email
                req.session.nombre = cliente[0].dataValues.nombre
                req.session.apellido = cliente[0].dataValues.apellido
                req.session.domicilio = cliente[0].dataValues.domicilio
                req.session.userId = cliente[0].dataValues.id

                res.redirect('/')
            }

        } catch (errors) {
            let respuesta = {
                result: false,
                error: errors
            }
            res.render('users/login', {
                alert:true
            });

        }
    },
    registerForm: (req, res) => {
        res.render('users/register', {})
    },
    register: async (req, res) => {

        let ciudadId = await cityManagerfunction(req, res, req.body.ciudad)

        await db.Cliente.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            domicilio: req.body.domicilio,
            email: req.body.email,
            password: req.body.password,
            idCiudad: ciudadId,
            habilitado: true,
        })
        res.redirect('login')
    },
    editForm: async (req, res) => {

        var cliente = await db.Cliente.findOne({
            include: [{
                association: 'ciudad',
            }],
            where: {
                id: req.session.userId
            }
        })


        res.render('users/profile', {
            nombre: cliente.dataValues.nombre,
            apellido: cliente.dataValues.apellido,
            email: cliente.dataValues.email,
            domicilio: cliente.dataValues.domicilio,
            ciudad: cliente.ciudad.dataValues.nombre

        })


    },
    update: async (req, res) => {

        let ciudadId = await cityManagerfunction(req, res, req.body.ciudad)
        let datosUser


        if (req.body.password.length == 0) {
            datosUser = await db.Cliente.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                domicilio: req.body.domicilio,
                email: req.body.email,
                idCiudad: ciudadId,
                

            }, {
                where: {
                    id: req.session.userId
                }
            })
        } else {
            datosUser = await db.Cliente.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                domicilio: req.body.domicilio,
                email: req.body.email,
                password: req.body.password,
                idCiudad: ciudadId,

            }, {
                where: {
                    id: req.session.userId
                }
            })
        }

        res.render('users/info',{
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            domicilio: req.body.domicilio,
            email: req.body.email,

        })

    },
    logout: (req, res) => {
        req.session.destroy()
        res.redirect('login')
    },
    delete: async (req, res) => {

        await db.Cliente.update({
            habilitado: false
        }, {
            where: {
                id: req.session.userId
            }
        })
                 
        // await db.Cliente.destroy({
        //     where: {
        //         id: req.session.userId
        //     }
        // })

        req.session.destroy()
        res.redirect('login')

    }
}


module.exports = usersControllers