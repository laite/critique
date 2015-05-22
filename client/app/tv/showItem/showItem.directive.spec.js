'use strict';

describe('Directive: showItem', function () {

  // load the directive's module and view
  beforeEach(module('critiqueApp'));
  beforeEach(module('app/tv/showItem/showItem.html'));

  var element, scope, $httpBackend;

  beforeEach(inject(function (_$httpBackend_, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('api/users/names').respond([{ _id: '1', name: 'User'}]);
    $httpBackend.expectGET('api/comments/show')
      .respond([{showId: '1', comment:'Test Comment', userId: '1', _id: '1', timeStamp: '2015-05-20T08:48:42.725Z'}]);

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
