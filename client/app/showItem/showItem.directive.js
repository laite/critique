'use strict';

angular.module('critiqueApp')
  .directive('showItem', ['comment', 'Auth', function (Comment, Auth) {
    return {
      templateUrl: 'app/showItem/showItem.html',
      restrict: 'E',
      link: function (scope, element) {

        /*
         * Scope
         */

        scope.showCommentbox = false;

        scope.comments = Comment.query(function() {
          console.log(scope.comments);
        });

        scope.toggleInput = function() {
          scope.showCommentbox = !scope.showCommentbox;
        };

        /*
         * Functions
         */

        scope.sendComment = function() {

          var commentText = element.find('input').val();
          var showId = scope.show._id;
          var userId = Auth.getCurrentUser()._id;

          var newComment = new Comment({ showId: showId, comment: commentText, userId: userId });
          newComment.$save();
        };

        scope.removeComment = function(e) {
          console.log(e);
          // var commentId = 
        };

      }
    };
  }]);
