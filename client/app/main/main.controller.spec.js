'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('critiqueApp'));
  beforeEach(module('socketMock'));

  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should do something later', function () {
    expect(true).toBe(true);
  });
});
