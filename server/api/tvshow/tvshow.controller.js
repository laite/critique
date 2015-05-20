'use strict';

var _ = require('lodash');
var Tvshow = require('./tvshow.model');

// Get list of tvshows
exports.index = function(req, res) {
  Tvshow.find(function (err, tvshows) {
    if(err) { return handleError(res, err); }
    return res.json(200, tvshows);
  });
};

// Get a single tvshow
exports.show = function(req, res) {
  Tvshow.findById(req.params.id, function (err, tvshow) {
    if(err) { return handleError(res, err); }
    if(!tvshow) { return res.send(404); }
    return res.json(tvshow);
  });
};

// Creates a new tvshow in the DB.
exports.create = function(req, res) {
  Tvshow.create(req.body, function(err, tvshow) {
    if(err) { return handleError(res, err); }
    return res.json(201, tvshow);
  });
};

// Updates an existing tvshow in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Tvshow.findById(req.params.id, function (err, tvshow) {
    if (err) { return handleError(res, err); }
    if(!tvshow) { return res.send(404); }
    var updated = _.merge(tvshow, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, tvshow);
    });
  });
};

// Deletes a tvshow from the DB.
exports.destroy = function(req, res) {
  Tvshow.findById(req.params.id, function (err, tvshow) {
    if(err) { return handleError(res, err); }
    if(!tvshow) { return res.send(404); }
    tvshow.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};


// Creates a new comment for the show
exports.addComment = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Tvshow.findById(req.params.id, function (err, tvshow) {
    if (err) { return handleError(res, err); }
    if(!tvshow) { return res.send(404); }
    tvshow.comments.push({ 'comment': req.body.comment, 'userId': req.body.user });
    tvshow.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, tvshow);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
