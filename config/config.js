const {
  DB_USERNAME = "postgres",
  DB_PASSWORD = "h1KHyXJMqLbtmaTzDZKc",
  DB_HOST = "containers-us-west-117.railway.app",
  DB_NAME = "railway",
  PORT = "5731",
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
    port: PORT,
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    dialect: "postgres",
    port: 3011,
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
    port: PORT,
  },
};