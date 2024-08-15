const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  port: 3309,
  user: 'pooja', // this is user who can access the databse
  password: 'pooja@123',// this is user password, application logs in on behalf of dtabase user. The the application user.
  database: 'userdb',// this is name of data base
});

module.exports = db;
