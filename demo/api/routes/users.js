var express = require('express');
var router = express.Router();
var ConnectionDriver = require('../db/connection-driver');

var connectionDriver = new ConnectionDriver();
var collectionDriver = undefined;

connectionDriver.connect(function() {
    collectionDriver = connectionDriver.collectionDriver;
});

/* GET users listing. */
router.get('/', function (req, res) {
    collectionDriver.findAll('users', function (objs, error) {
        if (error) {
            res.status(400).send(error);
        }
        else {
            res.set('Content-Type', 'application/json');
            res.status(200).send(objs);
        }
    });
});

router.get('/:entity', function (req, res) {
    var entity = req.params.entity;
    if (entity) {
        collectionDriver.get('users', entity, function (objs, error) {
            if (error) {
                res.status(400).send(error);
            }
            else {
                res.status(200).send(objs);
            }
        });
    } else {
        res.status(400).send({error: 'bad url', url: req.url});
    }
});

router.post('/', function (req, res) {
    var object = req.body;
    collectionDriver.save('users', object, function (err) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.status(201).send(object);
        }
    });
});

router.put('/:entity', function (req, res) {
    var entity = req.params.entity;
    if (entity) {
        collectionDriver.update('users', entity, req.body, function (objs, error) {
            if (error) {
                res.status(400).send(error);
            }
            else {
                res.status(200).send(objs);
            }
        });
    } else {
        var error = { "message": "Cannot PUT a whole collection" };
        res.status(400).send(error);
    }
});

router.delete('/:entity', function (req, res) {
    var entity = req.params.entity;
    if (entity) {
        collectionDriver.delete('users', entity, function (objs, error) {
            if (error) {
                res.status(400).send(error);
            }
            else {
                res.status(200).send(objs);
            } // 200 b/c includes the original doc
        });
    } else {
        var error = { "message": "Cannot DELETE a whole collection" };
        res.status(400).send(error);
    }
});

module.exports = router;
