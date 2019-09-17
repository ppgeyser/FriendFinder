//dependencies
var express = require("express");
var path = require("path");
var HTMLROUTER = require("./app/routing/htmlRoutes.js");
var APIROUTER = require("./app/routing/apiRoutes.js");

//server configuration
var app = express();
// var PORT = 3000;
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//new HTMLROUTER object from constructor in htmlRoutes.js
var htmlRouter = new HTMLROUTER();
htmlRouter.routeHTML();

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });