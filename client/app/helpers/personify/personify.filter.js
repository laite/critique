'use strict';

angular.module('critiqueApp')
  .filter('personify', ['userlist', function (Userlist) {

    Userlist.refreshOnce();

    return function (input) {
      return Userlist.findName(input);
    };
  }]);
