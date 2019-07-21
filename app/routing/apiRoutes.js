var friends = require("../data/friends.js");


module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    // display a JSON of all possible friends
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    // handle incoming survey results
    // handle compatibility logic
  });

  // determine the users most compatible friend... 
  // compatibility logic function() {
    function findMatch() {
      friends.forEach(function(friend) {
        for (var i = 0; i < friend.scores.length; i++) {

        }
      })
    }

    var calcDifference = function(arr1, arr2) {
      totalDifference = 0;
      for (let i in arr1) {
        totalDifference += Math.abs(arr1[i] - arr2[i]);
      }
      return totalDifference;
    }
      // convert each user's results into an array of numbers
      // compare the difference between current user's scores against those from other users
      // add up the differences to calculate the totalDifference
      // closest match is the user with the least amount of difference
      // display the result as a modal pop-up (with name and picture)
}