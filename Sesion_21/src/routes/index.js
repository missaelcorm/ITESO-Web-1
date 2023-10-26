const router = require('express').Router();
const albums = require('./../data/albums.json');

router.get('/albums', (req, res) => {
    res.send(albums);
});

module.exports = router;