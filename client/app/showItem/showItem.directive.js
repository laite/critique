'use strict';

angular.module('critiqueApp')
  .directive('showItem', function () {
    return {
      templateUrl: 'app/showItem/showItem.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.showCommentbox = false;
        scope.toggleInput = function() {
          scope.showCommentbox = !scope.showCommentbox;
        }
      }
    };
  });
