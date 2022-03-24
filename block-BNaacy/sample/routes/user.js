const express = require("express");
const router = express.Router();
const User = require("../models/user");


router.get("/", function(req, res){
    res.send("Welcome")
})

router.get("/new", function(req, res){
    res.render("userForm");
})

router.post("/", function(req, res){
    console.log(req.body)

    User.create(req.body, function(err, data){
        // res.status(200).json({status: "OK"})
        console.log(data)
     res.redirect("/users")
    })
})

module.exports = router;