'use strict';

angular.module('critiqueApp')
  .directive('showItem', function () {
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
          console.log('Sending comment: ' + element.find('input').val());
        };

        /*
         * Listeners
         */

        element.find('button').on('click', sendComment);

      }
    };
  });
