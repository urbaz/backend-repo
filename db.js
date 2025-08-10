const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('goatfarm', 'postgres', "It'sgud1", {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;