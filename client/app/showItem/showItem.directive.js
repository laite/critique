'use strict';

angular.module('critiqueApp')
  .directive('showItem', ['comment', 'Auth', function (Comment, Auth) {
    return {
      templateUrl: 'app/showItem/showItem.html',
      restrict: 'E',
      link: function (scope, element) {

        var resetComments = function() {
          // Load the comments initially from the database
          scope.comments = Comment.query({ by: 'show', commentId: scope.show._id });

          // Toggles the visibility of the input box & button
          scope.showCommentbox = false;
        };

        resetComments();

        scope.toggleInput = function() {
          scope.showCommentbox = !scope.showCommentbox;
        };

        scope.sendComment = function() {

          var commentText = element.find('input').val();
          var showId = scope.show._id;
          var userId = Auth.getCurrentUser()._id;

          var newComment = new Comment({ showId: showId, comment: commentText, userId: userId });
          newComment.$save(resetComments);
        };

        scope.removeComment = function(comment) {

          var commentId = comment._id;

          var removableComment = Comment.get({ commentId: commentId }, function() {
            removableComment.$delete({ commentId: commentId }, resetComments);
          });
        };

      }
    };
  }]);
