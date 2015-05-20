'use strict';

angular.module('critiqueApp')
  .factory('comment', ['$resource', function ($resource) {

    return $resource('api/comments/:by/:id', { by: '@by', id: '@id' }, {});

  }]);
