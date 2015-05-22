'use strict';

describe('Directive: setfocus', function () {

  // load the directive's module
  beforeEach(module('critiqueApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<setfocus></setfocus>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the setfocus directive');
  }));
});