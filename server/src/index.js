const express = require("express");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");

const io = new Server();
const app = express();

app.use(bodyParser.json());



app.listen(8000, (err) => {
    if(err){
        console.log(`Error occurred while listening to the server : ${err}`);
    }else{
        console.log(`Server is listening at http://localhost:8000`);
    }
})
io.listen(8001);

