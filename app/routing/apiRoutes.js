//Load data from friends.js

var friendData = require("../data/friends.js");

module.exports = function (app) {

    //setting up a JSON response for when a GET request
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    //setting up response for a post request
    app.post("/api/friends", function (req, res) {

        //Push data into friendArray
        friendData.push(req.body);

        console.log(req.body);

        //Logic to determine friend match goes here
        for (var i = 0; i < (friendData.length-1); i++) {

            var diff = 0;

            for (var j = 0; j < friendData[i].scores.length; j++) {
                
                diff += Math.abs(parseInt(friendData[i].scores[j]) - parseInt(req.body.scores[j]));
                
            };

            console.log("Diff: " + diff);
            
            //Send response with appropriate data
            if (diff < 15) {
                
                console.log(friendData[i]);
                res.json(friendData[i]);
                break;
            };

        };

        
    });
};