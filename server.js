// DEPENDENCIES
var express = require("express");


// EXPRESS CONFIGURATION
// Create "express" server
var app = express();

// Set initial port
var PORT = process.evn.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER
app.listen(PORT, () => console.log(`Listening on ${PORT}`));