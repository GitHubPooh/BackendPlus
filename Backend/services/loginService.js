<<<<<<< HEAD
const db = require("../config/db");

const mysql = require("mysql2");
const bcrypt = require("bcrypt");

exports.login = (username, password) => {
  return new Promise((resolve, reject) => {
    const sqlSearch = "Select * from userTable where user = ?";
    const search_query = mysql.format(sqlSearch, [username]);

    db.query(search_query, (err, results) => {
      if (err) return reject(err);
      if (results.length == 0) {
        console.log("--------> User does not exist");
        resolve(results);
      } else {
        const hashedPassword = results[0].password;
        if (bcrypt.compare(password, hashedPassword)) {
          console.log("---------> Login Successful");
          resolve(results);
        } else {
          console.log("---------> Password Incorrect");
          resolve(results);
        } //end of bcrypt.compare()
      } //end of User exists i.e. results.length==0
    });

    // const sql = 'SELECT * FROM usertable WHERE user = ? AND password = ?';
    // db.query(sql, [username, password], (err, results) => {
    //   if (err) return reject(err);
    //   resolve(results);
    // });
=======
const db = require('../config/db');



exports.login = (username, password) => {
  return new Promise((resolve, reject) => {

    const sql = 'SELECT * FROM users WHERE name = ? AND password = ?';
    db.query(sql, [username, password], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });

>>>>>>> 829c441f83ac041ad15eb6d843481ccd16bd007d
  });
};
