//Define functions of endpoitns
import {getConnection} from '../databases/database.js'

//Funcion Lista Para usarse
const getTotalbooks =  (req,res)=>{
    
    const mysqlConnection =  getConnection(); 
    const query = "SELECT * FROM books b INNER JOIN usersb u ON b.idUser = u.id INNER JOIN rooms r ON b.idRoom = r.id;";

    mysqlConnection.query(query, (err, result) => {
        if (err) {
            err;
        }
        console.log('result',result);
        
        res.json(result);
        //res.send('Get all elements in table');
        });
};

//Funcion Lista Para usarse
const getInforeservation = (req,res)=>{
    
    const mysqlConnection =  getConnection(); 
    const query = `SELECT * FROM books b INNER JOIN usersb u ON b.idUser = u.id INNER JOIN rooms r ON b.idRoom = r.id WHERE b.id = ${req.params.idBook}; `;

    mysqlConnection.query(query, (err, result) => {
        if (err) {
            err;
        }
        res.json(result);
        });
    
};

//Funcion Falta Para usarse

const bookReservation = (req,res) =>{

    const mysqlConnection =  getConnection(); 

    const customerRoom = {
        numRoom :    req.body.numRoom,
        numberBeds : req.body.numBeds,
        dimensions : req.body.dimensions,
        isWifi:      req.body.isWifi,
        isPhone:     req.body.isPhone,
        isTv :       req.body.isPhone 
    }

    const customerUser = {
        username :  req.body.name,
        lastName :  req.body.lastName,
        email :     req.body.email,
        phone:      req.body.phone,
        age:        req.body.age,
        gender:     req.body.gender
    }


    const query1 = "INSERT INTO usersb SET ?";
    mysqlConnection.query(query1, customerUser,  (err, result) => {
        if (err) {
            err;
        }
        
        console.log('My Result in User Post',result);
        res.send('User  created');

        });
    
    const query2 = "INSERT INTO rooms SET ?";
    mysqlConnection.query(query2, customerRoom,  (err, result) => {
        if (err) {
            err;
        }
        
        console.log('My Result in Room Post',result);
        res.send('Room created');

        });


    let customerBook = {
        idRoom :     0,
        idUser :     0,
        numberDays : req.body.numDays,
        statebBook:  req.body.stateBook,
        payment:     req.body.payment,
        methodPay:   req.body.methodPay
    }
    
    //const query3 = "INSERT INTO books SET ?";
    const query4 = "SELECT max(id) as ans FROM usersb "
    const query5 = "SELECT max(id) as ans FROM rooms "
    const query6 = "INSERT INTO books SET ?";

    mysqlConnection.query(query4, customerBook,  (err, result) => {
        if (err) {
            err;
        }

        idUser = result.ans;

        
        mysqlConnection.query(query5, customerBook,  (err, result) => {
            if (err) {
                err;
            }
    
            idRoom = result.ans;
            
            customerBook.idRoom = idRoom;
            customerBook.idUser = idUser;
            
            mysqlConnection.query(query6, customerBook,  (err, result) => {
                if (err) {
                    err;
                }
        
                console.log('My Result in Book Post',result);
                res.send('Book created');
    
                });

            });

        console.log('My Result in Books Post',result);
        res.send('Reservation created');

        });
};

//Funcion Lista Para usarse
const updateReservation = (req,res) =>{
   
    
    const mysqlConnection =  getConnection(); 
    
    const customerBook = {
        numberDays : req.body.numDays,
        statebBook:  req.body.stateBook,
        payment:     req.body.payment,
        methodPay:   req.body.methodPay
    }
    const query = `UPDATE books SET ? WHERE id = ${req.idBook}`;
    mysqlConnection.query(query, customerBook,  (err, result) => {
        if (err) {
            err;
        }
        
        console.log('Update My Result in Books Post',result);
        res.send('Reservation updated');

        });

};
const deleteReservation = (req,res) => {
    
    const mysqlConnection =  getConnection(); 
    const query = `DELETE FROM books WHERE id = ${req.idBook} AND statebBook = 'Pagado' OR statebBook = 'Eliminado'  `;
    mysqlConnection.query(query, (err, result) => {
        if (err) {
            err;
        }
        
        console.log('Deleted specfic book',result);
        res.send('Reservation deleted');

        });
} ;

const getInfouser = (req,res) =>{
    const mysqlConnection =  getConnection(); 
    const query = `SELECT * FROM users WHERE id = ${req.params.idUser}`;
    mysqlConnection.query(query, (err, result) => {
        if (err) {
            err;
        }
        
        console.log('Personal Information of user',result);
        res.json(result);

        });
} ;
const updateUser = (req,res) => {

    const mysqlConnection =  getConnection(); 
    
    const customerUser = {
        username :  req.body.username,
        lastName:   req.body.lastName,
        email:      req.body.email,
        phone:      req.body.phone,
        age:        req.body.age,
        gender :    req.body.gender,
    }
    const query = `UPDATE usersb SET ? WHERE id = ${req.idUser}`;
    mysqlConnection.query(query, customerUser,  (err, result) => {
        if (err) {
            err;
        }
        
        console.log('Update My Result in Books Post',result);
        res.send('User updated');

        });
}

export const methods = {
    getTotalbooks,
    getInforeservation,
    bookReservation,
    updateReservation,
    deleteReservation,
    getInfouser,
    updateUser
};