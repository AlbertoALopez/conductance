const mysql = require('mysql');

module.exports = function connectToMySql() {
  const connection = mysql.createConnection({
    host: process.env.GCP_SQL_HOST,
    user: process.env.GCP_SQL_USER,
    password: process.env.GCP_SQL_PASSWORD,
    localAddress: process.env.GCP_SQL_LOCAL_ADDRESS,
    port: process.env.GCP_SQL_PORT,
    database: process.env.GCP_SQL_DB_NAME,
  });

  connection.connect(function(err) {
    if (err) {
      return console.log(`Error connecting to database: ${err}`);
    }

    console.log(`Connected as id ${connection.threadId}`);
  });
}