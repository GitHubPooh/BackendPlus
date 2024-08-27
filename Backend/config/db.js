const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
<<<<<<< HEAD
  port: 3309,
  user: 'pooja', // this is user who can access the databse
  password: 'pooja@123',// this is user password, application logs in on behalf of dtabase user. The the application user.
  database: 'userdb',// this is name of data base
=======
  user: 'root',
  password: 'password',
  database: 'users_db',
>>>>>>> 829c441f83ac041ad15eb6d843481ccd16bd007d
});

module.exports = db;
