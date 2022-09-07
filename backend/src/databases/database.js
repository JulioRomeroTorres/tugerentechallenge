import mysql from 'mysql'
import internal from 'stream';
import config from '../config.js'

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    port:3306
});

const getConnection = () =>{
    console.log('We are going to verify conection with Mysql database');  
    const query1 = "CREATE DATABASE IF NOT EXISTS tugerentedata ";
    const query2 = "USE tugerentedata";
    const query3 = "CREATE TABLE IF NOT EXISTS rooms(\
                    id int(10) NOT NULL AUTO_INCREMENT,\
                    numberBeds tinyint NOT NULL, \
                    dimensions varchar(10) NOT NULL,\
                    isWifi tinyint NULL, \
                    isPhone tinyint NULL, \
                    isTV tinyint  NULL,\
                    PRIMARY KEY (id)\
                    );" ;
    const query4 = "CREATE TABLE IF NOT EXISTS usersB(\
                    id int(10) NOT NULL AUTO_INCREMENT,\
                    name varchar(10) NOT NULL, \
                    lastName varchar(10) NOT NULL, \
                    email tinyint NOT NULL, \
                    phone varchar(10) NOT NULL,\
                    age tinyint NOT NULL,\
                    gender tinyint NULL,\
                    PRIMARY KEY (id)\
                    );" ; 
    const query5 = "CREATE TABLE IF NOT EXISTS books(\
                    id int(10) NOT NULL AUTO_INCREMENT,\
                    idRoom int(10) NOT NULL, \
                    idUsuario int(10) NOT NULL, \
                    numberDays tinyint NOT NULL, \
                    stateBook tinyint NOT NULL,\
                    payment float NOT NULL,\
                    methodPay varchar(10) NOT NULL,\
                    PRIMARY KEY (id),\
                    FOREIGN KEY(idUsuario) REFERENCES usersB(id),\
                    FOREIGN KEY(idRoom) REFERENCES rooms(id)\
                    );";  

    connection.query(query1, function (err, result) {
        if (err) {
            err;
        }
        console.log('Query 1', result)
        });
    
    connection.query(query2, function (err, result) {
        if (err) {
            err;
        }
        console.log('Query 2',result)
        });
    
    connection.query(query3, function (err, result) {
        if (err) {
            err;
        }
        console.log('Query 3',result)
        });
    
    connection.query(query4, function (err, result) {
        if (err) {
            err;
        }
        console.log('Query 4',result)
        });
    
    connection.query(query5, function (err, result) {
        if (err) {
            err;
        }
        console.log('Query 5',result)
        });
    
    return connection;
};


export {getConnection};