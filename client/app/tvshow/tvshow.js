'use strict';

angular.module('critiqueApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tvshow', {
        url: '/tv/:show',
        templateUrl: 'app/tvshow/tvshow.html',
        controller: 'TvshowCtrl'
      });
  });
