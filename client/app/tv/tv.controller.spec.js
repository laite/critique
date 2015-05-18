'use strict';

describe('Controller: TVCtrl', function () {

  // load the controller's module
  beforeEach(module('critiqueApp'));

  var TVCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TVCtrl = $controller('TVCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
