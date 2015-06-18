'use strict';

describe('Directive: addnewshow', function () {

  // load the directive's module and view
  beforeEach(module('critiqueApp'));
  beforeEach(module('app/tv/addnewshow/addnewshow.html'));

  var element, scope, $httpBackend;
  var viewRefreshed = false;

  beforeEach(inject(function (_$httpBackend_, $rootScope, $compile) {

    $httpBackend = _$httpBackend_;
    $httpBackend.expectPOST('/api/tvshows')
      .respond({ 'name': 'Test Show', '_id': '123456789012345678901234', 'comments': []});

    scope = $rootScope.$new();
    scope.newShow = 'Test Show';

    // mock the tvshow listing in the controller
    viewRefreshed = false;
    scope.refreshView = function () { viewRefreshed = true; };

    element = angular.element('<add-new-show></add-new-show>');
    element = $compile(element)(scope);
    scope.$apply();

  }));

  it('should empty new show input after creating a new show', inject(function () {

    scope.addShow();
    expect(scope.newShow).toBe('');

  }));

  it('should refresh the view', inject(function () {

    scope.addShow();
    expect(viewRefreshed).toBe(true);

  }));
});
