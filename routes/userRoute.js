//here all the shit for users are gonna move
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// get user
router.get("/:userid", (req, res, next) => {
    const userid = req.params.userid;
    User.findOne({ _id: userid }, (err, user) => {
        res.status(200).send(user);
    });
});

//add artist id to user artist id => Spotify id
router.post("/:userid", (req, res, next) => {
    const userid = req.params.userid;
    console.log(typeof req.body.artistid);
    //find user to update
    if (req.body.artistid && typeof req.body.artistid == "number") {
        User.findOne({ _id: userid }, (err, user) => {
            user.artistsID.push(req.body.artistid);
            user.save();
            res.status(202).send("Artist has been added");
        }).catch(e => res.status(404).send("User is not found"));
    } else {
        // catch the fact that artistid is not filled in
        res.status(400).send("There is no artistid. Check the body your posting with.");
    }
});
//remove user
router.delete("/:userid", (req, res, next) => {
    const userid = req.params.userid;

    User.remove({ _id: userid }, err => {
        if (!err) {
            res.status(204).send("User is gone");
        } else {
            res.status(400).send(err);
        }
    });
});
//remove artists id form user
router.delete("/:userid/:artistid", (req, res, next) => {
    User.findOne({ _id: req.params.userid }, (err, user) => {
        if (user.artistsID.indexOf(req.params.artistid) > -1) {
            user.artistsID.splice(user.artistsID.indexOf(210), 1);
            user.save();
            res.status(202).send("Deleted that boi");
        }
    });
});

module.exports = router;
