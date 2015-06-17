'use strict';

angular.module('critiqueApp')
  .controller('TVCtrl', ['$scope', '$http', 'userlist', function ($scope, $http, Userlist) {
    $scope.tvshows = [];

    $scope.refreshView = function() {
      $http.get('/api/tvshows').success(function(tvshows) {
        $scope.tvshows = tvshows;
      });
    };

    Userlist.refreshNames();
    $scope.refreshView();

  }]);
