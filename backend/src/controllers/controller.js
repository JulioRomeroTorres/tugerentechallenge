//Define functions of endpoitns
import {getConnection} from '../databases/database.js'

const getTotalinfo =  (req,res)=>{
    
    const mysqlConnection =  getConnection(); 
    //const result = mysqlConnection.query('SELECT id, nameUser, age, addres  FROM users')   
    
    mysqlConnection.query(
        'SELECT id, nameUser, age, addres  FROM users', (err, results, fields)=> {
            console.log('Los errores', err)
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        });
    res.json({});
}

const getInfouser = (req,res)=>{
    console.log(`Mi prrimer usurio tiene id ${req.params.id} `)
    res.send('Pimer usuario')
}

export const methods = {
    getTotalinfo,
    getInfouser,
};