// Getters and setters for db calls
const { mysqlPool } = require('./index.js');

const getValues = {
  // Select all users from table
  users: () => {
    return new Promise((resolve, reject) => {
      mysqlPool.getConnection((poolConnectionError, connection) => {
        if (poolConnectionError) reject(console.log(`Error connecting to pool: ${poolConnectionError}`));
        connection.query('SELECT * FROM user;', (error, results, fields) => {
          // Release thread from pool
          connection.release();
          if (error) reject(console.log(`Error fetching from database: ${error}`));

          resolve(results);
        });
      });
    });
  },
};

module.exports = {
  getValues,
};
