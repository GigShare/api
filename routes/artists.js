const express = require('express');
const router = express.Router();
//handling get request for /artists
router.get('/', (req, res , next) =>{
    res.status(200).json({
        message: 'GET REQUEST'
    });
});

//handling post request for /artist
router.post('/' , (req, res, next) => {
    res.status(201).json({
        message: "this is a post on /artist"
    });
});

//return artist based on id
router.get("/:artistId" , (req, res, next) => {
    //you get the id from using the req.params.{id name in url}
    const id = req.params.artistId;
    if(id === "test"){
        res.status(200).json({
            message: "it worked",
            id: id
        });
    }else {
        res.status(400).json({
            message: "you are wrong"
        })
    }
});

//route to patch artist
router.patch("/:artistId" , (req, res, next) => {
    res.status(200).json({
        message: "this is patch"
    });
});

//route to delete artist
router.delete("/:artistId" , (req, res, next) => {
    res.status(200).json({
        message: "this is delete"
    });
});

module.exports = router;