var express = require('express');
var database = require('./database')

var router = express.Router();

router.get('/filter/:filter/:value', function (req, res) {
    database.read.filter(res.params.filter, res.params.value, function (offers) {
        res.send(offers);
    });
})

module.exports = router;
