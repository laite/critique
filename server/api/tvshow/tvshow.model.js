'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TvshowSchema = new Schema({
  name: String,
  description: String,
  comments: [Schema.Types.Mixed] // { comment: '', userId: '' }
});

module.exports = mongoose.model('Tvshow', TvshowSchema);
