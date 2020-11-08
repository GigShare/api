//here all the shit for users are gonna move
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router({ mergeParams: true });

router.post('/', (req, res, next) => {
    const searchTerm = req.body.searchInput;
    const url = encodeURI('https://api.spotify.com/v1/search?type=artist&query=' + searchTerm);
    //  prettier-ignore
    fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + req.body.bearer,
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        res.status(200).send(data)
    })
});
//handling search request for artist
router.get('/', (req, res, next) => {
    res.status(201).send('nice');
});

module.exports = router;
