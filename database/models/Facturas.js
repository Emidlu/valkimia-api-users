module.exports = function (sequelize, dataTypes) {
    let alias = 'Factura'

    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        detalle: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        fecha: {
            type: dataTypes.DATE,
            allowNull: false
        },
        importe: {
            type: dataTypes.DECIMAL(18, 4),
            allowNull: false
        }
    }

    let config = {
        tableName: 'facturas',
        timestamps: true,
        underscored: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true
    }

    let Factura = sequelize.define(alias, cols, config);

    Factura.associate = function (models) {
        Factura.belongsTo(models.Cliente, {
            as: "cliente",
            foreignKey: "idCliente"
        })

    }

    return Factura
}