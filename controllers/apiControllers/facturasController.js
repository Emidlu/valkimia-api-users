let db = require('../../database/models');
let sequelize = db.sequelize


let facturasController = {
    listaFacturas: async (req, res) => {
    try {
        const cliente = await db.Factura.findAll({
            order: [
                ['id', 'DESC'],
            ],
            attributes: ['fecha', 'detalle', 'importe', 'cliente.id', 'id'],
            include: [{
                association: 'cliente',
                attributes: {
                    exclude: ['id', 'created_at', 'updated_at', 'deleted_at']
                }

            }]
        })

        let respuesta = {
            result: true,
            error: null,
            response: {
                facturas: cliente
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
    generateFactura: async (req, res) => {


        try {
            await db.Factura.create({
                idCliente: req.body.idCliente,
                fecha: new Date(),
                detalle: req.body.detalle,
                importe: req.body.importe
            })

            res.json({
                result: true,
                error: null,
            })

        } catch (errors) {

            let respuesta = {
                result: false,
                error: errors
            }
            res.json(respuesta)

        }
    },
    detalleFactura: async (req, res) => {
        try {
            const factura = await db.Factura.findOne({
                where: {
                    id: req.params.id
                },
                attributes: ['fecha', 'detalle', 'importe', 'cliente.id', 'id'],
                include: [{
                    association: 'cliente',
                    include: [{
                        association: 'ciudad',
                        attributes: ['nombre'],

                    }]

                }]
            })

            let respuesta = {
                result: true,
                error: null,
                response: {
                    factura: factura
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

module.exports = facturasController;