/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Tvshow = require('./tvshow.model');

exports.register = function(socket) {
  Tvshow.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Tvshow.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('tvshow:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('tvshow:remove', doc);
}