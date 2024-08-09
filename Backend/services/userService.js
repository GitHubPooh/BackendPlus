const db = require('../config/db');


exports.getAllUsers = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.getUserById = (id) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
};

exports.createUser = (name, email) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, result) => {
      if (err) return reject(err);
      resolve({ id: result.insertId, name, email });
    });
  });
};

exports.updateUser = (id, name, email) => {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(sql, [name, email, id], (err, result) => {
      if (err) return reject(err);
      resolve(result.affectedRows ? { id, name, email } : null);
    });
  });
};

exports.deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], (err, result) => {
      if (err) return reject(err);
      resolve(result.affectedRows ? true : false);
    });
  });
};
