'use strict';

describe('Directive: setfocus', function () {

  // load the directive's module
  beforeEach(module('critiqueApp'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    scope.focusMock = true;
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<input set-focus-from="focusMock">');
    element = $compile(element)(scope);
    expect(element.isolateScope().focusValue).toBe(true);
  }));
});
