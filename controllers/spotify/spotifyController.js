const fetch = require('node-fetch');

exports.GetArtistName = (artistID, spotifyCode) => {
    // console.log(spotifyCode);
    // prettier-ignore
    return fetch('https://api.spotify.com/v1/artists/' + artistID, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + spotifyCode,
        },
    })
    .then((response) => response.json())
    .then((data) => {
        return data;
    });
};
