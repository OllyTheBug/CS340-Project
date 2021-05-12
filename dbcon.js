var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_mendelse',
  password        : '8200',
  database        : 'cs340_mendelse'
});
module.exports.pool = pool;
