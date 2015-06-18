'use strict';

angular.module('critiqueApp')
  .factory('userlist', ['$http', function ($http) {

    var userNames = {};
    var refreshed = false;

    function _refreshNames() {

      refreshed = true; // we set refresh true even when the request is still pending

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
      },
      refreshOnce: function() {
        if (!refreshed) {
          _refreshNames();
        }
      }
    };
  }]);
