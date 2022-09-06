import app from "./app.js"
import router from "./routes/routes.js"
//const app = require('./app.js');

const main = ()=>{
    
    app.listen(app.get("port"), () => console.log(`Server is listening in port ${app.get("port")} `));
}

main();