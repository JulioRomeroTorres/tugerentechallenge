import mysql from 'mysql'
import config from '../config.js'

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    port:3306
});

const getConnection = () =>{
    console.log('We are going to verify conection with Mysql database');  
        
    connection.query("USE tugerentedata", function (err, result) {
        if (err) {
            err;
        }
        console.log(result)
        });
    
    return connection;
};


export {getConnection};