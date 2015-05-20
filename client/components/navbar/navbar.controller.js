'use strict';

angular.module('critiqueApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $http) {
    $scope.menu = [{
      'title': 'TV',
      'link': '/tv'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.currentUserName = Auth.getCurrentUser().name;

    $scope.ToggleNameBox = function() {
      $scope.changeNameBoxVisible = !$scope.changeNameBoxVisible;
    };

    $scope.changeName = function() {
      var id = Auth.getCurrentUser()._id;
      var newName = $scope.navbarNewName;
      console.log(newName);

      $http.put('/api/users/' + id + '/name', { newName: newName }).success(function() {
        $scope.changeNameBoxVisible = false;
        $scope.currentUserName = newName;
      });
    };

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
