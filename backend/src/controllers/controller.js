//Define functions of endpoitns
import {getConnection} from '../databases/database.js'

const getTotalbooks =  (req,res)=>{
    
    const mysqlConnection =  getConnection(); 
    const query = "SELECT * FROM books";

    mysqlConnection.query(query, (err, result) => {
        if (err) {
            err;
        }
        console.log('result',result);
        
        res.json(result);
        //res.send('Get all elements in table');
        });
}

const getInfoBook = (req,res)=>{
    
    const mysqlConnection =  getConnection(); 
    const query = `SELECT * FROM books WHERE id = ${req.params.id}`;

    mysqlConnection.query(query, (err, result) => {
        if (err) {
            err;
        }
        res.json(result);
        });
    
}

const createBook = (req,res) =>{

    const mysqlConnection =  getConnection(); 

    const customerBook = {
        nameUser : req.body.name,
        age : req.body.age,
        addres : req.body.address
    }
    
    const query = "INSERT INTO users SET ?";
    mysqlConnection.query(query, customerBook,  (err, result) => {
        if (err) {
            err;
        }
        
        console.log('My Result in Post',result);
        res.send('Reservation created');

        });
}

export const methods = {
    getTotalinfo,
    getInfouser,
    bookReservation,
};