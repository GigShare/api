const fetch = require('node-fetch');
const User = require('../../models/userModel');

exports.addArtistToUser = (req, res) => {
    const userid = req.params.userid;

    //find user to update
    if (req.body.artistid) {
        User.findOne({ _id: userid }, (err, user) => {
            if (!user.artistsID.includes(req.body.artistid)) {
                user.artistsID.push(req.body.artistid);
                user.save();
                res.status(202).send({ success: 'artist added' });
            } else {
                res.status(409).send({ error: 'artist already added' });
            }
        }).catch((e) => res.status(404).send({ error: 'User is not found' }));
    } else {
        // catch the fact that artistid is not filled in
        res.status(400).send('There is no artistid. Check the body your posting with.');
    }
};

exports.deletUser = (req, res) => {
    const userid = req.params.userid;

    User.remove({ _id: userid }, (err) => {
        if (!err) {
            res.status(204).send('User is gone');
        } else {
            res.status(400).send(err);
        }
    });
};

exports.deleteArtistFromUser = (req, res) => {
    User.findOne({ _id: req.params.userid }, (err, user) => {
        if (user.artistsID.indexOf(req.params.artistid) > -1) {
            user.artistsID.splice(user.artistsID.indexOf(210), 1);
            user.save();
            res.status(202).send('Deleted that boi');
        }
    });
};

exports.getSpotifyDetail = async (res, accesToken) => {
    const headerString = 'Bearer ' + accesToken;
    const result = await fetch('https://api.spotify.com/v1/me', {
        headers: { Authorization: headerString },
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((e) => {
            console.log(error);
            res.status(500).send('error with spotify: ' + e);
        });

    return result;
};
