module.exports = function (sequelize, dataTypes) {
    let alias = 'Ciudad'

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
        }
    }

    let config = {
        tableName: 'ciudades',
        timestamps: true,
        underscored: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true
    }

    let Ciudad = sequelize.define(alias, cols, config);

    Ciudad.associate = function (models) {
        Ciudad.hasMany(models.Cliente, {
            as: "cliente",
            foreignKey: "idCiudad"
        })

    }

    return Ciudad
}