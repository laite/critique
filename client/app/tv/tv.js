'use strict';

angular.module('critiqueApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tv', {
        url: '/tv',
        templateUrl: 'app/tv/tv.html',
        controller: 'TVCtrl'
      });
  });
