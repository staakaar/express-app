const { Pool } = require("pg");

const pool = new Pool({
  user: "iwamototakayuki",
  host: "localhost",
  database: "expressdb",
  password: "postgres",
  port: 5432,
});

module.exports = pool;
