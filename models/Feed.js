const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Feed = sequelize.define('Feed', {
  name: {
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
  }
}, {
  tableName: 'feeds',
  timestamps: false
});

module.exports = Feed;