'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('feeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantity: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      unit: {
        type: Sequelize.STRING,
        allowNull: false
      },
      purchased: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      used: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('feeds');
  }
};
