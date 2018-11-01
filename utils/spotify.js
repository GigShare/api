const config = require('../config');
const fetch = require('node-fetch');
module.exports = {
    //This functions gets the artist your search for
    //and check if you even have the right name
    getArtist: function(nameArtist) {  
        //check for spaces in artists name!
        //regex!
        fetch('https://api.spotify.com/v1/search', {
        method: 'POST', // or 'PUT'
        headers:{
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + config.spotifyKey, 
        },
        params:{
            'q' : 'papa%20roach',
            'type' : 'artist'
        }
          }).then(res => res.json())
          .then(response => console.log('Success:', JSON.stringify(response)))
          .catch(error => console.error('Error:', error)); 

        return config.spotifyKey;
    }
}