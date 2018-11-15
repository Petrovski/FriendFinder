const express = require("express"),
      path = require("path"),
      htmlRoutes = require("./app/routing/htmlRoutes.js"),
      apiRoutes = require("./app/routing/apiRoutes.js");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("Server listening on: " + PORT);
})