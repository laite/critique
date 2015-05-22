'use strict';

describe('Directive: namebox', function () {

  // load the directive's module and view
  beforeEach(module('critiqueApp'));
  beforeEach(module('app/helpers/namebox/namebox.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<namebox></namebox>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the namebox directive');
  }));
});