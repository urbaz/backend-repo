'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('goats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      breed: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.FLOAT
      },
      status: {
        type: Sequelize.STRING
      },
      lastHealthCheck: {
        type: Sequelize.DATE
      },
      nextVaccination: {
        type: Sequelize.DATE
      },
      feedType: {
        type: Sequelize.STRING
      },
      dailyFeed: {
        type: Sequelize.FLOAT
      },
      cost: {
        type: Sequelize.FLOAT
      },
      revenue: {
        type: Sequelize.FLOAT
      },
      notes: {
        type: Sequelize.TEXT
      },
      owner: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('goats');
  }
};
