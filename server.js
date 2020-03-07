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

// DATA
// =============================================================
var tables = [
    {
        customerName,
        phoneNumber,
        customerEmail,
        customerID,
    }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  // Displays all tables
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

  // Displays a single table, or returns false
app.get("/api/tables/:table", function(req, res) {
    var chosen = req.params.table;
  
    console.log(chosen);
  
    for (var i = 0; i < tables.length; i++) {
      if (chosen === tables[i].customerName) {
        return res.json(tables[i]);
      }
    }
  
    return res.json(false);
  });

  // Create New Tables - takes in JSON input
app.post("/api/tables", function(req, res) {
    //Up to 5 tables!
    if (tables.length < 5) {

        var newTable = req.body;
      
        newTable.push(customerName);
      
        res.json(newTable);
    }
    else {
        alert("Sorry, no tables are currently available. You have been added to the waitlist!");

        var newWait = req.body;

        newWait.push(customerName);

        res.json(newWait);
    }
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
