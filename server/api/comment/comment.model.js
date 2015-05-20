'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
  comment: String,
  showId: Schema.Types.ObjectId,
  userId: Schema.Types.ObjectId
});

module.exports = mongoose.model('Comment', CommentSchema);
