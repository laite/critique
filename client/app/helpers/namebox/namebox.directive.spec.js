'use strict';

describe('Directive: namebox', function () {

  // load the directive's module and view
  beforeEach(module('critiqueApp'));
  beforeEach(module('app/helpers/namebox/namebox.html'));

  var element, scope;

  beforeEach(function() {

    var mockAuth = {
      getCurrentUser: function() {
        return { name: 'User' };
      }
    };

    module(function($provide) {
      $provide.value('Auth', mockAuth);
    });

    inject(function ($rootScope) {
      scope = $rootScope.$new();
      scope.currentUserName = 'User';
    });
  });

  it('should show current user name', inject(function ($compile) {
    element = angular.element('<li name-box></li>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.find('a').html()).toBe('User');
  }));
});
