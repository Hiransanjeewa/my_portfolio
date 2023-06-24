
const express = require('express');
const db = require("./database/db.js")

const index = express();
const PORT = 8080;


index.use(express.json());
index.use(express.urlencoded({ extended: true }));


const routes = require('./routes/routes')
const schedule = require("node-schedule");
index.use('/', routes)
index.listen(PORT, (error) =>{


        if(!error)
            console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);


