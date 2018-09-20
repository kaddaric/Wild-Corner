const mysql      = require('mysql');
const connection = mysql.createConnection({
  multipleStatements: true,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'wild_corner'
});

connection.connect((err) => {
  if (!err) {
  console.log('Database is connected');
  } else {
  console.log('No connection with database');
  }
  });

module.exports  =  connection;