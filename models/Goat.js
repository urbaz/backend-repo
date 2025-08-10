const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const goat = sequelize.define('goat', {
  name: DataTypes.STRING,
  breed: DataTypes.STRING,
  age: DataTypes.INTEGER,
  gender: DataTypes.STRING,
  weight: DataTypes.FLOAT,
  status: DataTypes.STRING,
  lastHealthCheck: DataTypes.DATE,
  nextVaccination: DataTypes.DATE,
  feedType: DataTypes.STRING,
  dailyFeed: DataTypes.FLOAT,
  cost: DataTypes.FLOAT,
  revenue: DataTypes.FLOAT,
  notes: DataTypes.TEXT,
  owner: DataTypes.STRING,      // <--- Add this comma here
  medicalHistory: {
    type: DataTypes.JSON,
    allowNull: true,
    defaultValue: []
  }
}, {
  timestamps: false,
  tableName: 'goats',
  freezeTableName: true
});

module.exports = goat;
