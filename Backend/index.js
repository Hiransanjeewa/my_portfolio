
const express = require('express');
const db = require("./database/db.js")
const cors = require('cors');




const index = express();






index.use(cors());




index.use(express.json());
index.use(express.urlencoded({ extended: true }));


const routes = require('./routes/routes')
const schedule = require("node-schedule");


index.use('/', routes)



const PORT = 443;



index.listen(PORT, (error) =>{

        if(!error)
            console.log("Server is Successfully Running, and App is listening on port "+ 443)
    else
        console.log("Error occurred, server can't start", error);
    }
);


