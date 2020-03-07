// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Schedule reservation requests
// =============================================================

//Restaurant has just 5 tables available. First five requests get a reservation. 


//Every request after that is sent to the waiting list.

// Routes
// =============================================================

// Basic route that sends the user first to the home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
// Basic route that sends the user to see the tables reserved
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
  // Basic route that sends the user to the form that allows reservations
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
