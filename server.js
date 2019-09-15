//dependencies
var express = require("express");
var path = require("path");

//server configuration
var app = express();
// var PORT = 3000;
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());