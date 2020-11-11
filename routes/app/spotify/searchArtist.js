//here all the shit for users are gonna move
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router({ mergeParams: true });
const User = require('../../../models/userModel');

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
        // Check if artist is already added to the group
        const searchGroup = getSearchGroup(req.body.searchKind);

        searchGroup.findOne({ _id: req.body.id }, (err, user) => {
            data.artists.items.forEach((artist, key) => {
                if(user.artistsID.includes(artist.id)){
                    data.artists.items[key].saved = true;
                }
            });
            res.status(200).send(data)
        }).catch((e) => res.status(404).send({ error: 'there is no group or user with this id' }));
    })
});
//handling search request for artist
router.get('/', (req, res, next) => {
    res.status(201).send('nice');
});

function getSearchGroup(searchKind) {
    if (searchKind == 'user') {
        return User;
    }
}

module.exports = router;
