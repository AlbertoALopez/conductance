const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.GCP_SQL_HOST,
  user: process.env.GCP_SQL_USER,
  password: process.env.GCP_SQL_PASSWORD,
  localAddress: process.env.GCP_SQL_LOCAL_ADDRESS,
  port: process.env.GCP_SQL_PORT,
  database: process.env.GCP_SQL_DB_NAME,
});

module.exports = db;
