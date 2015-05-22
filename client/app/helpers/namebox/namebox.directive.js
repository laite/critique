'use strict';

angular.module('critiqueApp')
  .directive('nameBox', ['Auth', '$http', function (Auth, $http) {
    return {
      templateUrl: 'app/helpers/namebox/namebox.html',
      restrict: 'A',
      link: function (scope) {

        scope.currentUserName = Auth.getCurrentUser().name;

        scope.ToggleNameBox = function() {
          scope.changeNameBoxVisible = !scope.changeNameBoxVisible;
        };

        scope.changeName = function() {
          var id = Auth.getCurrentUser()._id;
          var newName = scope.navbarNewName;

          $http.put('/api/users/' + id + '/name', { newName: newName }).success(function() {
            scope.changeNameBoxVisible = false;
            scope.currentUserName = newName;
          });
        };

      }
    };
  }]);
