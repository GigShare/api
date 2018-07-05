const express = require('express');
const router = express.Router();

//get for all the genres we got
router.get('/', (req , res, next) => {
    res.status(200).json({
        message: 'Here are all the genres'
    });
});

//post to add genre to the list 
router.post('/' , (req,res, next) => {
    res.status(201).json({
       message: "Here u can post a genre" 
    });
});

//get a single genre with all the artist
router.get('/:genreId', (req, res, next) => {
    res.status(200).json({
        message: "here u can get a single genre and see al the artist for the genre",
        id: req.params.genreId
    });
});

//post to a specific genre a new artist
router.post('/:genreId', (req, res, next) => {
    res.status(200).json({
        message: "here u can get a single genre and see al the artist for the genre",
        id: req.params.genreId
    });
});

//delete genre
router.delete('/:genreId', (req, res, next) => {
    res.status(200).json({
        message: "delete a genre",
        id: req.params.genreId
    });
});

module.exports = router