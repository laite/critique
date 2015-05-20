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

        scope.toggleInput = function() {
          scope.showCommentbox = !scope.showCommentbox;
        };

        /*
         * Functions
         */

        var sendComment = function() {
          var newComment = new Comment({ id: scope.show._id, comment: 'Test', userId: Auth.getCurrentUser()._id });
          newComment.$save();
        };

        /*
         * Listeners
         */

        element.find('button').on('click', sendComment);

      }
    };
  }]);
