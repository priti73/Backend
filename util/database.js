const mysql=require('mysql2');

const pool=mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password:'PFH#23kgrw9'

})

module.exports=pool.promise();
