const express = require("express");
const exports = express.Router();
exports.create = async (req, res) => {
    res.send("Create Blog API")
 };
exports.read = async (req, res) => {
    res.send("Read Blog API")
 };
exports.delete = async (req, res) => { 
    res.send("delete Blog API")
};

exports.update = async (req, res) => { 
    res.send("Update Blog API")
};
