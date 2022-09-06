import app from "./app.js"
//const app = require('./app.js');

const main = ()=>{
    app.get('/', (req,res)=>{
        res.send('Holamundo mi primer test')
    });
    app.listen(app.get("port"), () => console.log(`Server is listening in port ${app.get("port")} `));
}

main();