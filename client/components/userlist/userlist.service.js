'use strict';

angular.module('critiqueApp')
  .factory('userlist', ['$http', function ($http) {

    var userNames = {};

    function _refreshNames() {
      return $http.get('api/users/names')
        .success(function(data) {
          userNames = {};
          for (var i in data) {
            userNames[data[i]._id] = data[i].name;
          }
      });
    }

    _refreshNames();

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
