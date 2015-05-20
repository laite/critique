'use strict';

angular.module('critiqueApp')
  .factory('comment', ['$resource', function ($resource) {

    return $resource('api/tvshows/:showId/comments', { showId:'@id'}, {});
  }]);
