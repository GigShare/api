//here all the shit for users are gonna move
const express = require('express');
const { route } = require('./spotifyRoute');
const router = express.Router({ mergeParams: true });

//handling search request for artist
router.get('/', (req, res, next) => {
    res.status(201).send({ 'Find Artist': true });
});

module.exports = router;
