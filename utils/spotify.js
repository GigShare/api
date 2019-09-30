const config = require("../config");
const fetch = require("node-fetch");
const modelArtist = require("../models/artistModel");
module.exports = {
    //This functions gets the artist your search for
    //and check if you even have the right name
    checkArtist: function(nameArtist) {
        //check for spaces in artists name!
        //regex!
        fetch("https://api.spotify.com/v1/search?q=slaves&type=artist", {
            method: "GET", // or 'PUT'
            headers: {
                Authorization: "Bearer " + config.spotifyKey
            }
        })
            .then(res => {
                if (res.status === 401) {
                    this.getAuthorization(nameArtist);
                    throw "Getting a new token";
                } else {
                    return res.json();
                }
            })
            .then(response => {
                console.log("Success:", JSON.stringify(response));
            })
            .catch(error => console.error("Error:", error));
    },
    getAuthorization: function(artist) {
        console.log(artist + " here i will get a new token");
    }
};
