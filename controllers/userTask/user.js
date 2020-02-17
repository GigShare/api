exports.addArtistToUser = (req, res) => {
    const userid = req.params.userid;
    console.log(typeof req.body.artistid);
    //find user to update
    if (req.body.artistid && typeof req.body.artistid == 'number') {
        User.findOne({ _id: userid }, (err, user) => {
            user.artistsID.push(req.body.artistid);
            user.save();
            res.status(202).send('Artist has been added');
        }).catch(e => res.status(404).send('User is not found'));
    } else {
        // catch the fact that artistid is not filled in
        res.status(400).send('There is no artistid. Check the body your posting with.');
    }
};
