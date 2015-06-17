'use strict';

angular.module('critiqueApp')
  .controller('TVCtrl', ['$scope', '$http', 'userlist', 'Auth', function ($scope, $http, Userlist, Auth) {

    $scope.tvshows = [];
    $scope.isAdmin = Auth.isAdmin;

    $scope.refreshView = function() {
      $http.get('/api/tvshows').success(function(tvshows) {
        $scope.tvshows = tvshows;
      });
    };

    Userlist.refreshNames();
    $scope.refreshView();

  }]);
