'use strict';

describe('Directive: showItem', function () {

  // load the directive's module and view
  beforeEach(module('critiqueApp'));
  beforeEach(module('app/showItem/showItem.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();

    scope.show = { name: 'Luther' };
  }));

  it('should show the series title as <h2>', inject(function ($compile) {
    element = angular.element('<show-item></show-item>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.find('h2').html()).toBe('Luther');
  }));
});
