const express = require("express");
const exports = express.Router();

exports.get("/", (req,res) => {
    res.send("server is it");
})
exports.post("/", (req,res) => {
    res.send("server created");
})
exports.put ("/", (req,res) => {
    res.send("server updated");
})
exports.delete("/", (req,res) => {
    res.send("server delete");
})
