const { Sequelize } = require('sequelize');
const config = require('./config.js');  // your config file
const env = process.env.NODE_ENV || 'development';

let sequelize;

if (env === 'production') {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  });
} else {
  sequelize = new Sequelize(
    config[env].database,
    config[env].username,
    config[env].password,
    {
      host: config[env].host,
      dialect: config[env].dialect,
    }
  );
}

module.exports = sequelize;  // <-- Export the instance here!
