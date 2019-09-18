//dependencies
var path = require("path");

//HTMLROUTER constructor to be called in server.js
module.exports = function (app) {
  
  //route to survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  //default route
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

}