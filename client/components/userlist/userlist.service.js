'use strict';

angular.module('critiqueApp')
  .factory('userlist', ['$http', function ($http) {

    var userNames = {};

    function _refreshNames() {
      $http
        .get('api/users/names')
        .success(function(data) {
          userNames = {};
          angular.forEach(data, function(item) {
            userNames[item._id] = item.name;
          });
        });
    }

    // Public API here
    return {
      findName: function (name) {
        return (userNames[name] || 'unknown');
      },
      refreshNames: function() {
        _refreshNames();
      }
    };
  }]);
