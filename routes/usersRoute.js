//here all the shit for users are gonna move
const express = require("express");
const router = express.Router();
const app = require('../app');
const User = require("../models/userModel");
//handling get request for /artists and send back all artist
router.get('/', (req, res, next) => {
    User.find({}, (err, artists) => {
        res.status(200).send(artists);
    });
});

//creating a user 
router.post('/', (req, res, next) => {
    const user = new User(req.body);
    if ( req.body.username ){
        user.save(e => {
            user.save();
            res.status(201).send('User has been created');
        });
    }else{
        res.status(401).send('shit was not correct');
    } 
});

//use different file if it user specific 
const userRoute = require('./userRoute');
app.use('/:userid', userRoute);

module.exports = router;
