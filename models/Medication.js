const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Medication = sequelize.define('Medication', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false
  },
  purchased: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  used: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  nextDue: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'medications',
  timestamps: false
});

module.exports = Medication;