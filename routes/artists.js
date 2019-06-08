const express = require("express");
const router = express.Router();
const Artist = require("../models/artistModel");
//handling get request for /artists and send back all artist
router.get("/", (req, res, next) => {
    Artist.find({}, (err, artists) => {
        res.status(200).send(artists);
    });
});

//handling post request for /artist
router.post("/", (req, res, next) => {
    var artist = new Artist(req.body);
    artist.save(e => {
        artist.save();
        res.status(201).send(req.body);
    });
});

//return artist based on id
router.get("/:artistId", (req, res, next) => {
    //you get the id from using the req.params.{id name in url}
    const id = req.params.artistId;
    res.status(200).json({
        id: id,
        message: "it worked"
    });
});

//route to patch artist
router.patch("/:artistId", (req, res, next) => {
    res.status(200).json({
        message: "this is patch"
    });
});

//route to delete artist
router.delete("/:artistId", (req, res, next) => {
    res.status(200).json({
        message: "this is delete"
    });
});

module.exports = router;
