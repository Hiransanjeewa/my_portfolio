
const express = require('express');



const app = express();

const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect("mongodb:localhost:27017/my_portfolio") 
        console.log('Mongo connected')
    } catch(error) {
        console.log(error)
        process.exit()
    }
}



// Connecting to mongo Db database

// const connectDB = require('./db');
// app.use(connectDB)

// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/latestdb", {
//     useNewUrlParser:true,useUnifiedTopology:true
// },(err)=>{
//     if (err) {
//         console.log("err")
//     }else{
//         console.log("successfully connected")
//     }
// }
// )

const PORT = 3000;








// app.get('/hello', (req, res)=>{
//     res.set('Content-Type', 'text/html');
//     res.status(200).send("<h1>Hello GFG Learner!</h1>");
// });

//app.use(express.json)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes')
app.use('/', routes)
app.listen(3000, (error) =>{
        if(!error)
            console.log("Server is Successfully Running, and App is listening on port "+ 3000)
    else
        console.log("Error occurred, server can't start", error);
    }
);