//here all the shit for users are gonna move
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
//handling get request for /artists and send back all artist
router.get("/", (req, res, next) => {
    res.status(201).send("get op users");
});

module.exports = router;
