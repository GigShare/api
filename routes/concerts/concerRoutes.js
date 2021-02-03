const express = require('express');
const userController = require('../../controllers/userTask/user');
const router = express.Router({ mergeParams: true });

router.get('/', (req, res, next) => {
    res.status(202).send({ working: true });
});

router.post('/user', (req, res, next) => {
    userController.getConcertUsers(req, res);
});

module.exports = router;
