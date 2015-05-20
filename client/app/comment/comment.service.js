'use strict';

angular.module('critiqueApp')
  .factory('comment', ['$resource', function ($resource) {

    return $resource('api/comments/:by/:commentId', { by: '@by', commentId: '@commentId' }, {});

  }]);
