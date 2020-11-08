//here all the shit for users are gonna move
const express = require('express');
const router = express.Router({ mergeParams: true });

router.post('/', (req, res, next) => {
    res.status(201).send({ 'bigt iddies': true });
});

//handling search request for artist
router.get('/', (req, res, next) => {
    res.status(201).send('nice');
});

module.exports = router;
