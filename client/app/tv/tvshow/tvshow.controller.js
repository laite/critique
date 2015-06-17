'use strict';

angular.module('critiqueApp')
  .controller('TvshowCtrl', ['$scope', '$http', '$stateParams', function ($scope, $http, $stateParams) {
    $scope.show = {};

    $scope.id = $stateParams.show;

    $http.get('/api/tvshows/' + $scope.id).success(function(tvshow) {
      $scope.name = tvshow.name;
    });
  }]);
