const db = require('../config/db');


exports.getAllUsers = () => {
  return new Promise((resolve, reject) => {
<<<<<<< HEAD
    const sql = 'SELECT * FROM usertable';
=======
    const sql = 'SELECT * FROM users';
>>>>>>> 829c441f83ac041ad15eb6d843481ccd16bd007d
    db.query(sql, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.getUserById = (id) => {
  return new Promise((resolve, reject) => {
<<<<<<< HEAD
    const sql = 'SELECT * FROM usertable WHERE id = ?';
=======
    const sql = 'SELECT * FROM users WHERE id = ?';
>>>>>>> 829c441f83ac041ad15eb6d843481ccd16bd007d
    db.query(sql, [id], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
};

exports.createUser = (name, email) => {
  return new Promise((resolve, reject) => {
<<<<<<< HEAD
    const sql = 'INSERT INTO usertable (name, email) VALUES (?, ?)';
=======
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
>>>>>>> 829c441f83ac041ad15eb6d843481ccd16bd007d
    db.query(sql, [name, email], (err, result) => {
      if (err) return reject(err);
      resolve({ id: result.insertId, name, email });
    });
  });
};

exports.updateUser = (id, name, email) => {
  return new Promise((resolve, reject) => {
<<<<<<< HEAD
    const sql = 'UPDATE usertable SET name = ?, email = ? WHERE id = ?';
=======
    const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
>>>>>>> 829c441f83ac041ad15eb6d843481ccd16bd007d
    db.query(sql, [name, email, id], (err, result) => {
      if (err) return reject(err);
      resolve(result.affectedRows ? { id, name, email } : null);
    });
  });
};

exports.deleteUser = (id) => {
  return new Promise((resolve, reject) => {
<<<<<<< HEAD
    const sql = 'DELETE FROM usertable WHERE id = ?';
=======
    const sql = 'DELETE FROM users WHERE id = ?';
>>>>>>> 829c441f83ac041ad15eb6d843481ccd16bd007d
    db.query(sql, [id], (err, result) => {
      if (err) return reject(err);
      resolve(result.affectedRows ? true : false);
    });
  });
};
