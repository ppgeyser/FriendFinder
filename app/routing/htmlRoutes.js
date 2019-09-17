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

//HTMLROUTER constructor to be called in server.js
var HTMLROUTER = function() {
    this.routeHTML = function () {
        
        app.get("/", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/home.html"));
          });
          
          app.get("/survey", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
          });
    }
};

module.exports = HTMLROUTER;