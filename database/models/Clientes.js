module.exports = function (sequelize, dataTypes) {
    let alias = 'Cliente'

    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        domicilio: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        habilitado: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        }
    }

    let config = {
        tableName: 'clientes',
        timestamps: true,
        underscored: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true
    }

    let Cliente = sequelize.define(alias, cols, config)

    Cliente.associate = function (models) {
        Cliente.belongsTo(models.Ciudad, {
            as: "ciudad",
            foreignKey: "idCiudad"
        })
        Cliente.hasMany(models.Factura, {
            as: "factura",
            foreignKey: "idCliente"
        })

    }

    // Cliente.associate = function (models) {
    //     Cliente.hasMany(models.Factura, {
    //         as: "factura",
    //         foreignKey: "idCliente"
    //     })

    // }

    return Cliente
}