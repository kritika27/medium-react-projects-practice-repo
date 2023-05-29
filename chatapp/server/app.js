const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors=require("cors");
const { Server } = require("socket.io");
// const io = new Server(server);
app.use(cors());
const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000/",
        methods:['GET','POST'],
    }
}

)
io.on('connection', (socket) => {
    console.log('User is connected');

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        socket.broadcast.emit('receive message', msg);
    })
    // socket.on('chat message', (msg) => {
    //     console.log('message: ' + msg);
    //   });
//   });
})

server.listen(3000, () => {
  console.log('listening on 3001');
});