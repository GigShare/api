//here all the shit for users are gonna move
const express = require('express');
const router = express.Router();

//handling get request for /artists and send back all artist
router.use('/app', require('./app/appRoute'));
router.use('/users', require('./users/usersRoute'));
router.use('/concerts', require('./concerts/concerRoutes'));

module.exports = router;
