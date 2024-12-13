const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Keneth1998',
    database: 'db_polishop'
});

db.connect(function(err){
    if(err) {
        throw err;
    }
    console.log('DATABASE CONNECTED!!')
});
module.exports = db;