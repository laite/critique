'use strict';

angular.module('critiqueApp')
  .filter('personify', ['userlist', function (Userlist) {

    return function (input) {
      return Userlist.findName(input);
    };
  }]);
