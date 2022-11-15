const {
  DB_USERNAME = "postgres",
  DB_PASSWORD = "fThwdqCosV3ejrSuDvuN",
  DB_HOST = "containers-us-west-119.railway.app",
  DB_NAME = "railway",
  PORT = "6148",
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