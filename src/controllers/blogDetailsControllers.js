const express = require("express");
const exports = express.Router();
exports.create = async (req, res) => {
    res,send("create blog api");
 };


exports.read = async (req, res) => { 
    res,send("read blog api");
};


exports.delete = async (req, res) => { 
    res,send("delete blog api");
};


exports.update = async (req, res) => {

    res,send("update blog api");
 };
module.exports =exports;
