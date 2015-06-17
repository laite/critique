'use strict';

angular.module('critiqueApp')
  .directive('addNewShow', ['$http', function ($http) {
    return {
      templateUrl: 'app/tv/addnewshow/addnewshow.html',
      restrict: 'E',
      link: function (scope, element, attrs) {

        scope.addShow = function() {
          if(scope.newShow === '') {
            return;
          }

          $http.post('/api/tvshows', { name: scope.newShow });
          scope.newShow = '';

          // Refresh the tvshow-list on the tvcontroller
          scope.refreshView();
        };

      }
    };
  }]);
