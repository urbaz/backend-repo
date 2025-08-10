const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Financial = sequelize.define('Financial', {
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'financials',
  timestamps: false
});

module.exports = Financial;