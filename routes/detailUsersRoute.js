//here all the shit for users are gonna move
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const userController = require('../controllers/userTask/user'); // Controller for basic detail User interaction

// get user
router.get('/:userid', (req, res, next) => {
    const userid = req.params.userid;
    User.findOne({ _id: userid }, (err, user) => {
        res.status(200).send(user);
    });
});

//add artist id to user artist id => Spotify id
router.post('/:userid', (req, res, next) => {
    userController.addArtistToUser(req, res);
});
//remove user
router.delete('/:userid', (req, res, next) => {
    userController.deletUser(req, res);
});
//remove artists id form user
router.delete('/:userid/:artistid', (req, res, next) => {
    userController.deleteArtistFromUser(req, res);
});

module.exports = router;
