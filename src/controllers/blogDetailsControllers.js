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







// exports.get = async (req, res) => {
//     res.send("Create Blog API")
//  };
// exports.post = async (req, res) => {
//     res.send("Read Blog API")
//  };
//  exports.delete = async (req, res) => { 
//      res.send("Update Blog API")
//  };
// exports.put = async (req, res) => { 
//     res.send("delete Blog API")
// };

// module.exports = blogDetailsControllers;