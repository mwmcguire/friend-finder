// DEPENDENCIES
var path = require("path");


// ROUTING
module.exports = function(app) {

  app.get("/", function(req, res) {
    // display home.html
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    // display survey.html
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}