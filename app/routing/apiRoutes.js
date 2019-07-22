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
      photo: "",
      difference: 100
    }


    friends.forEach(function(friend) {
      console.log(friends[i].name);

      var scores = [];
      var totalDifference = 100;

      for (var i = 0; i < friend.scores.length; i++) {
        scores.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));
      }

      totalDifference = scores.reduce(function(total, num) {
        return total + num;
      }, 0)

      if (totalDifference < difference) {
        difference = totalDifference;
        match.name = friend.name;
        match.photo = friend.photo;
      }
    });

    res.json(match);

    friends.push(req.body);
  });

  // determine the users most compatible friend... 
      // convert each user's results into an array of numbers
      // compare the difference between current user's scores against those from other users
      // add up the differences to calculate the totalDifference
      // closest match is the user with the least amount of difference
      // display the result as a modal pop-up (with name and picture)
}