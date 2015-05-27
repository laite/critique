'use strict';

angular.module('critiqueApp')
.factory('comment', ['$resource', '$q', function ($resource, $q) {

  var CommentResource = $resource('api/comments/:by/:id', { by: '@by', id: '@id' }, {});
  var Comments = [];

  function _refreshComments() {

    return $q(function(resolve, reject) {
      CommentResource.query(function(data) {
        Comments = data;
        resolve();
      }, reject);
    });

  }

  _refreshComments();

  // Comment API
  return {

    getComments: function (showId) {

      var wanted = [];
      angular.forEach(Comments, function(comment) {
        if (comment.showId === showId) {
          wanted.push(comment);
        }
      });

      return wanted;

    },

    refreshComments: function() {

      _refreshComments();

    },

    saveNew: function(attributes) {

      var newComment = new CommentResource(attributes);

      return $q(function(resolve, reject) {
        newComment.$save(function() {
          _refreshComments().then(resolve, reject);
        });
      });
    },

    // commentId should be actual ObjectId of the removable comment
    removeComment: function(commentId) {

      return $q(function(resolve, reject) {
        var removableComment = CommentResource.get({ id: commentId }, function() {
          removableComment.$delete({ id: commentId }, function() {
            _refreshComments().then(resolve, reject);
          }, reject);
        });
      });
    }
  };
}]);
