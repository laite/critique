'use strict';

angular.module('critiqueApp')
  .controller('TVCtrl', ['$scope', '$http', 'userlist', function ($scope, $http, Userlist) {
    $scope.tvshows = [];

    Userlist.refreshNames();

    $http.get('/api/tvshows').success(function(tvshows) {
      $scope.tvshows = tvshows;
    });

    $scope.addShow = function() {
      if($scope.newShow === '') {
        return;
      }
      $http.post('/api/tvshows', { name: $scope.newShow });
      $scope.newShow = '';
    };

    $scope.deleteShow = function(tvshow) {
      $http.delete('/api/tvshows/' + tvshow._id);
    };
  }]);
