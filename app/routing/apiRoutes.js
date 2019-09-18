//Load data from friends.js

var friendData = require("../data/friends.js");

module.exports = function(app) {

    //setting up a JSON response for when a user visists /api/friends
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    //setting up response when data is submitted
    app.post("/api/friends", function(req, res) {

        //Push data into friendArray

        //Logic to determine friend match goes here
            //Send response with appropriate data
    });
}