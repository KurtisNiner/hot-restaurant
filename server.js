
var http = require("http");
var bodyParser = require("body-parser");
var express = require("express");
var path = require('path')

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log("listening on http://localhost:" + PORT);

var reservations = [
    {
      name: "elena",
      phoneNumber: "555-1928",
      email: "Jedi@Master",
      uniqueID: 900,
      
    },
    {
      name: "jess",
      phoneNumber: "555-3490",
      email: "Jedi@Master",
      uniqueID: 898343,
    },
    {
      name: "kevin",
      phoneNumber: "555-1234",
      email: "Jedi@Master.net",
      uniqueID: 9080,
    }
   ];

   var waitlist = [
    {
      name: "elena",
      phoneNumber: "555-1928",
      email: "Jedi@Master",
      uniqueID: 900,
      
    },
    {
      name: "jess",
      phoneNumber: "555-3490",
      email: "Jedi@Master",
      uniqueID: 348934,
    },
    {
      name: "kevin",
      phoneNumber: "555-1234",
      email: "Jedi@Master.net",
      uniqueID: 423324,
    }
   ];



app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

