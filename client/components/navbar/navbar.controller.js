'use strict';

angular.module('critiqueApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $http) {
    $scope.menu = [{
      'title': 'TV',
      'link': '/tv'
    }];

    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
