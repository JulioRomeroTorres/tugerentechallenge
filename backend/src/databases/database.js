import mysql from 'mysql'
import config from '../config.js'

const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    port:3000
});


const getConnection = () =>{
    console.log('We are going to verify conection with Mysql database');    
    return connection;
};

//export const methods = {
//    getConnection
//}

export {getConnection};