// config/db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'coepesdb.c36qc4cqic9f.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'coepes123',
  database: 'coepes'
});

connection.connect((err) => {
  if (err) {
	console.error('Error connecting to the database:', err);
	return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = connection;