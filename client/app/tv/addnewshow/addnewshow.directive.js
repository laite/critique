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

          // Refresh the tvshowlist on the tvcontroller
          scope.refreshView();
        };

        scope.deleteShow = function(tvshow) {
          // $http.delete('/api/tvshows/' + tvshow._id);
        };
      }
    };
  }]);
