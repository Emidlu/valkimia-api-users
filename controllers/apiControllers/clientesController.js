let db = require('../../database/models');
let sequelize = db.sequelize


let clientesController = {

    listaClientes: async (req, res) => {


        try {

            const cliente = await db.Cliente.findAll({
                include: [{
                    association: 'factura',
                }],
                where: {
                    habilitado: true
                }
            })


            let respuesta = {
                result: true,
                error: null,
                response: {
                    clientes: cliente
                }
            }
            res.send(respuesta);


        } catch (errors) {
            let respuesta = {
                result: false,
                error: errors
            }
            res.json(respuesta)

        }
    },
    detalleCliente: async (req, res) => {

        try {
            const cliente = await db.Cliente.findOne({
                where: {
                    id: req.params.id
                },
                include: [{
                    association: 'ciudad',

                }]
            })

            let respuesta = {
                result: true,
                error: null,
                response: {
                    cliente: cliente
                }
            }
            res.send(respuesta);


        } catch (errors) {
            let respuesta = {
                result: false,
                error: errors
            }
            res.json(respuesta)

        }

    }
    

}

module.exports = clientesController;