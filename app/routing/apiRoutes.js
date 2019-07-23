// DEPENDENCIES
var friends = require("../data/friends.js");


// ROUTING
module.exports = function(app) {

  // GET request to display list of all possible friends on the API
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  
  // POST request to handle incoming survey results and compatibility logic
  app.post("/api/friends", function(req, res) {

    var match = {
      name: "",
      photo: ""
    }

    var difference = 40;

    for ( var i in friends) {
      totalDifference = 0;

      for (var j in friends[i].scores) {
        totalDifference += Math.abs(friends[i].scores[j] - req.body.scores[j])
      }

      if (totalDifference < difference) {
        difference = totalDifference;
        match.name = friends.name;
        match.photo = friends.photo;
      }
    }

    friends.push(req.body);
    res.json(match);

  });

  // determine the users most compatible friend... 
      // convert each user's results into an array of numbers
      // compare the difference between current user's scores against those from other users
      // add up the differences to calculate the totalDifference
      // closest match is the user with the least amount of difference
      // display the result as a modal pop-up (with name and picture)
}