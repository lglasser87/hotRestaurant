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

// Arrays
//=============================================================

const reserveArr = [];
const waitArr = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  // Displays all tables
app.get("/tables", function(req, res) {
    return res.json(reserveArr);
  });

  // Displays a single table, or returns false
app.get("/tables/:table", function(req, res) {
    var chosen = req.params.reserveArr;
  
    console.log(chosen);
  
    for (var i = 0; i < reserveArr.length; i++) {
      if (chosen === reserveArr[i].customerName) {
        return res.json(reserveArr[i]);
      }
    }
  
    return res.json(false);
  });

  // Create New Tables - takes in JSON input
app.post("/api/tables", function(req, res) {
    //Up to 5 tables!
    if (reserveArr.length < 5) {

        var newReservation = req.body;
      
        newReservation.push(customerName);
      
        res.json(newReservation);
    }
    else {
        alert("Sorry, no tables are currently available. You have been added to the waitlist!");

        var newWait = req.body;

        waitArr.push(newWait);

        res.json(waitArr);
    }
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
