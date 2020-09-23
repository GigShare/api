//here all the shit for users are gonna move
const express = require('express');
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
    const user = new User(req.body);
    user.validate((error) => {
        if (error) {
            //check for error
            const errMessage = error.errors.username.message;
            res.status(401).send(errMessage);
        } else {
            // no error save the object
            user.save((e) => {
                user.save();
                res.status(201).send('User has been created');
            });
        }
    });
});

router.use('/:userid', require('./detailUsersRoute'));

module.exports = router;