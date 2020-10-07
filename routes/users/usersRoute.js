//here all the shit for users are gonna move
const express = require('express');
const { getSpotifyDetail } = require('../../controllers/userTask/user');
const router = express.Router({ mergeParams: true });
const User = require('../../models/userModel');

//handling get request for /artists and send back all artist
router.get('/', (req, res, next) => {
    User.find({}, (err, artists) => {
        res.status(200).send(artists);
    });
});

//creating a user
router.post('/', (req, res, next) => {
    getSpotifyDetail(res, req.body.accesToken).then((spotifyUser) => {
        console.log(spotifyUser);

        const userSpotify = new User({ username: spotifyUser.display_name });
        // Check if user exist
        User.findOne({ username: spotifyUser.display_name }, (err, user) => {
            if (user) {
                // Send back the data of the user
                res.status(201).json({ existing: true, userData: user });
            } else {
                // add user to DB
                userSpotify.save((e) => {
                    userSpotify.save();
                    res.status(201).json({ existing: false, userData: userSpotify });
                });
            }
        });
    });
});

router.use('/:userid', require('./detailUsersRoute'));

module.exports = router;
