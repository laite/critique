'use strict';

describe('Filter: personify', function () {

  // load the filter's module
  beforeEach(module('critiqueApp'));

  // initialize a new instance of the filter before each test
  var personify, $httpBackend;

  beforeEach(function () {

    inject(function (_$httpBackend_, $filter) {

      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('api/users/names')
        .respond([{ _id: '1', name: 'User'}]);

      personify = $filter('personify');
    });

  });

  it('should personify User', function () {
    $httpBackend.flush();
    expect(personify(1)).toBe('User');
  });

});
