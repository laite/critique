'use strict';

/*
 * set-focus-from=<expression>
 *
 * Useful to set focus on input boxes etc. programmatically
 *
 */

angular.module('critiqueApp')
  .directive('setFocusFrom', function($timeout) {
    return {
        restrict: 'A',
        scope: {
            focusValue: '=setFocusFrom'
        },
        link: function($scope, $element, undefined) {
            $scope.$watch('focusValue', function(currentValue, previousValue) {
                if (currentValue === true && !previousValue) {
                  $timeout(function() { $element.focus(); });
                }
            });
        }
    };
  });
