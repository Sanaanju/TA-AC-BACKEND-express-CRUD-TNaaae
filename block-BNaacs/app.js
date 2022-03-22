var express = require("express");
var path = require("path");

var mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://127.0.0.1:27017/admin", (err) => {
  console.log(err ? err : "connected to database");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "views"));

app.get('/', (req,res)=> {
    res.set("views", path.join(__dirname, "views"));
})

app.get('/', (res, req) => {
  res.render('index');
})

app.listen(3000, () => {
  console.log("server is listening to port 3k");
});