const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fatehgoatfarm', 'postgres', "It'sgud1", {
  host: 'localhost',
  dialect: 'postgres',
  logging: false // Disable SQL logging in console
});

// Test connection
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection failed:', err));

module.exports = sequelize;