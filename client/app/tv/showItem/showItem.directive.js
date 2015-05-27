'use strict';

angular.module('critiqueApp')
  .directive('showItem', ['comment', 'Auth', function (Comment, Auth) {
    return {
      templateUrl: 'app/tv/showItem/showItem.html',
      restrict: 'E',
      link: function (scope, element) {

        var resetComments = function() {
          // Load the comments
          scope.comments = Comment.getComments(scope.show._id);

          // Toggles the visibility of the input box & button
          scope.showCommentbox = false;
        };

        resetComments();

        scope.toggleInput = function() {
          scope.showCommentbox = !scope.showCommentbox;
        };

        scope.isOwnComment = function(userId) {
          return (userId === Auth.getCurrentUser()._id);
        };

        /* Save a new comment to the db */
        scope.sendComment = function() {

          var commentText = element.find('input').val();
          var showId = scope.show._id;
          var userId = Auth.getCurrentUser()._id;

          Comment
            .saveNew({ showId: showId, comment: commentText, userId: userId })
            .then(resetComments);

          element.find('input').val('');
        };

        /* Remove existing comment from db */
        scope.removeComment = function(comment) {

          Comment
            .removeComment(comment._id)
            .then(resetComments);

        };

      }
    };
  }]);
