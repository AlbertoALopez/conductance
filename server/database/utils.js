// Getters and setters for db calls

const getValues = {
  // Select all users from table
  users: (db) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM user;', (error, results, fields) => {
        if (error) reject(console.log(`Error fetching from database: ${error}`));

        resolve(results);
      });
    });
  },
};

module.exports = {
  getValues,
};
