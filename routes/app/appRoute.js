//here all the shit for users are gonna move
const express = require('express');
const router = express.Router();

//handling get request for /artists and send back all artist
router.use('/spotify', require('./spotify/spotifyRoute'));
router.use('/spotifySearch', require('./spotify/searchArtist'));

module.exports = router;
