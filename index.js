const express = require("express");
const app = express();
const multer = require("multer");

app.createServer("/",(req, res) =>{
    res.end("server created");
})



app.listen(8000,() =>{
    console.log("server is running.");
})


const App = require("app");