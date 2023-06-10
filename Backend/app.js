
const express = require('express');

const app = express();
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