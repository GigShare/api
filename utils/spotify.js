const config = require('../config');
const fetch = require('node-fetch');
module.exports = {
    //This functions gets the artist your search for
    //and check if you even have the right name
    getArtist: function(nameArtist) {  
        //check for spaces in artists name!
        //regex!
        fetch('https://api.spotify.com/v1/search?q=slaves&type=artist', {
        method: 'GET', // or 'PUT'
        headers:{
          'Authorization': 'Bearer ' + config.spotifyKey, 
        }
        }).then((res) => {
            if(res.status === 401){
                this.getNewToken();
            return;
            }else{
                return res.json();
            }
        })
        .then((response) => {
             //if error code is
            console.log('Success:', JSON.stringify(response))
        })
        .catch(error => console.error('Error:', error)); 

        return config.spotifyKey;
    },
    getNewToken: function(){
        console.log('here i will get a new token');
    }
}