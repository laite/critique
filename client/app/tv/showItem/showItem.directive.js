'use strict';

angular.module('critiqueApp')
  .directive('showItem', ['comment', 'Auth', '$http', function (Comment, Auth, $http) {
    return {
      templateUrl: 'app/tv/showItem/showItem.html',
      restrict: 'E',
      link: function (scope, element) {

        scope.resetComments = function() {
          // Load the comments
          scope.comments = Comment.getComments(scope.show._id);

          // Toggles the visibility of the input box & button
          scope.showCommentbox = false;
        };

        scope.resetComments();

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
            .then(scope.resetComments);

          element.find('input').val('');
        };

        /* Remove existing comment from db */
        scope.removeComment = function(comment) {

          Comment
            .removeComment(comment._id)
            .then(scope.resetComments);

        };

        scope.deleteShow = function() {
          var showID = element.data('id');

          // TODO: It would be highly appropriate to show confirmation dialog before actually doing anything //

          /* We remove all attached comments from the database with this */
          Comment
            .removeAllCommentsFromShow(showID)
            .then(function() {
              $http.delete('/api/tvshows/' + showID);
              scope.refreshView();
            })
            .catch(function(message) {
              console.error(message);
            });
        };
      }
    };
  }]);
