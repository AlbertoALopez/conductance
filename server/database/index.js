const mysql = require('mysql');

const mysqlPool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  localAddress: process.env.SQL_LOCAL_ADDRESS,
  port: process.env.SQL_PORT,
  database: process.env.SQL_DB_NAME,
});

module.exports = {
  mysqlPool,
};
