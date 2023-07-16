
const express = require('express');
const db = require("./database/db.js")
const cors = require('cors');

const http = require('http');
const socketIO = require('socket.io');


const index = express();
const server = http.createServer(index);
const io = socketIO(server);


io.on('connection', (socket) => {
    console.log('A client connected');
  
    // Handle WebSocket events
    socket.on('message', (data) => {
      console.log('Received message:', data);
      // Handle the received message as needed
    });
  
    socket.on('disconnect', () => {
      console.log('A client disconnected');
    });
  });



index.use(cors());
const PORT = 3001;



index.use(express.json());
index.use(express.urlencoded({ extended: true }));


const routes = require('./routes/routes')
const schedule = require("node-schedule");


// index.use('/', routes)


server.use('/',routes)

const port = 8080;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});




// index.listen(PORT, (error) =>{

//         if(!error)
//             console.log("Server is Successfully Running, and App is listening on port "+ 8080)
//     else
//         console.log("Error occurred, server can't start", error);
//     }
// );


