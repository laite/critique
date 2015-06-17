'use strict';

var express = require('express');
var controller = require('./comment.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);

router.get('/:id', controller.show);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

router.get('/show/:id', controller.findbyshow);
router.delete('/show/:id', controller.destroybyshow);

module.exports = router;
