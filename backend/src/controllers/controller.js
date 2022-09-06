//Define functions of endpoitns
import {getConnection} from '../databases/database.js'

const getTotalinfo =  (req,res)=>{
    
    const mysqlConnection =  getConnection(); 
    const query = "SELECT * FROM users";

    mysqlConnection.query(query, async (err, result) => {
        if (err) {
            err;
        }
        
        console.log('result',result);
        res.json(result);

        });

}

const getInfouser = (req,res)=>{
    console.log(`Mi prrimer usurio tiene id ${req.params.id} `)
    res.send('Pimer usuario')
}

export const methods = {
    getTotalinfo,
    getInfouser,
};