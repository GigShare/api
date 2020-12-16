const express = require('express');
const router = express.Router({ mergeParams: true });

router.get('/', (req, res, next) => {
    res.status(202).send({ boobies: true });
});

module.exports = router;
