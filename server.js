// DEPENDENCIES
var express = require("express");


// EXPRESS CONFIGURATION
// Create "express" server
var app = express();

// Set initial port
var PORT = process.env.PORT || 8080;

// MIDDLEWARE
// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
app.listen(PORT, () => console.log(`App listening on ${PORT}`));