// config.js
module.exports = {
  development: {
    username: "postgres",
    password: "It'sgud1",
    database: "fatehgoatfarm",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }
};
