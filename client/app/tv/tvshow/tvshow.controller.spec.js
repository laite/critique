'use strict';

describe('Controller: TvshowCtrl', function () {

  // load the controller's module
  beforeEach(module('critiqueApp'));

  var TvshowCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TvshowCtrl = $controller('TvshowCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
