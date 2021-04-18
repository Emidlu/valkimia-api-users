'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('facturas', {
      id: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      idCliente: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        references: {
          model: {
            tableName: 'clientes',
            key: 'id'
          }
        },
        allowNull: false
      },
      detalle: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false
      },
      importe: {
        type: Sequelize.DECIMAL(18, 4),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('facturas')
  }
};