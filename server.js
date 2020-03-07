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
