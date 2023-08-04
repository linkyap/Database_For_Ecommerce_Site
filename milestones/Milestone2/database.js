const os = require('os');
const mysql = require('mysql');

// Note that your remote host where your database is hosted
// must support user permissions to run stored triggers, procedures, and functions.
const dbHost = process.env.DB_HOST;
const dbUsername = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

class Database {
  static connection() {
    /**
     * This method creates a connection with your database.
     * IMPORTANT: All the environment variables must be set correctly
     * before attempting to run this method. Otherwise, it will throw an error message
     * stating that the attempt to connect to your database failed.
     */
    return new Promise((resolve, reject) => {
      const connection = mysql.createConnection({
        host: dbHost,
        port: 3306,
        user: dbUsername,
        password: dbPassword,
        database: dbName,
        charset: 'utf8mb4',
        multipleStatements: true
      });

      connection.connect((err) => {
        if (err) {
          console.error(`Error connecting to the database: ${err}`);
          reject(err);
        } else {
          console.log(`Bot connected to the database: ${dbName}`);
          resolve(connection);
        }
      });
    });
  }

  static execute(query, values) {
    return new Promise(async (resolve, reject) => {
      try {
        const connection = await this.connection();
      
        connection.query(query, values, (error, results) => {
          connection.end();

          if (error) {
            console.error(`Error executing query: ${error}`);
            reject(error);
          } else {
            resolve(results);
          }
        });

      } catch (error) {
        console.error(`Error executing query: ${error}`);
        reject(error);
      }
    });
  }
}


 

  




module.exports = { Database };
