'use strict';

describe('Directive: showItem', function () {

  // load the directive's module and view
  beforeEach(module('critiqueApp'));
  beforeEach(module('app/tv/showItem/showItem.html'));

  var element, scope, $httpBackend;

  beforeEach(inject(function (_$httpBackend_, $rootScope, $compile) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('api/comments')
      .respond([
          {showId: '1', comment:'Test Comment', userId: '1', _id: '1', timeStamp: '2015-05-20T08:48:42.725Z'},
          // The second one shouldn't show on this element (wrong showId)
          {showId: '2', comment:'Another one', userId: '1', _id: '3', timeStamp: '2015-05-20T08:48:43.725Z'},
          {showId: '1', comment:'Another one', userId: '2', _id: '2', timeStamp: '2015-05-20T08:48:43.725Z'}]);
    $httpBackend.expectGET('api/users/names').respond([{ _id: '1', name: 'First User'}, { _id: '2', name: 'Second User'}]);

    scope = $rootScope.$new();

    scope.show = { name: 'Luther', _id: '1' };

    element = angular.element('<show-item></show-item>');
    element = $compile(element)(scope);
    scope.$apply();

  }));

  it('should show the series title as <h2>', inject(function () {
    expect(element.find('h2').html()).toBe('Luther');
  }));

  it('should load comments to the scope', inject(function () {
    $httpBackend.flush();
    scope.resetComments(); // resetComments loads the recieved data from httpBackend flush

    expect(scope.comments[0].comment).toMatch(/Test Comment/);
  }));

  it('should show the proper user before comment', inject(function() {
    $httpBackend.flush();
    scope.resetComments();
    scope.$digest(); // digest ng-repeat on comment

    expect(element.find('.comment-line')['0'].outerHTML).toMatch(/First User.*Test Comment/);
    expect(element.find('.comment-line')['1'].outerHTML).toMatch(/Second User.*Another one/);
  }));
});
