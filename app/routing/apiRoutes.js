//Load data from friends.js

var friendData = require("../data/friends.js");

module.exports = function(app) {

    //setting up a JSON response for when a GET request
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    //setting up response for a post request
    app.post("/api/friends", function(req, res) {

        //Push data into friendArray

        //Logic to determine friend match goes here
            //Send response with appropriate data
    });
}