//here all the shit for users are gonna move
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
//handling get request for /artists and send back all artist
router.get("/", (req, res, next) => {
    res.status(201).send("get op users");
});

//creating a user 
router.post('/', (req, res, next) => {
    const user = new User(req.body);

    if(req.body.username){
        user.save(e => {
            user.artistsID = []
            user.save();
            res.status(201).send('User has been created');
        });
    }else{
        res.status(401).send('shit was not correct');
    } 
});

module.exports = router;
