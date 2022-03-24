const express = require("express");
const mongoose = require("mongoose");

const app = express();
const path = require("path");

mongoose.connect("mongodb://localhost/users", err => {
    console.log("Connected", err ? false: true);
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.json());
app.use(express.urlencoded());




app.listen(3000, () => {
    console.log('server is listening on port 3k')
});