'use strict';

describe('Filter: personify', function () {

  // load the filter's module
  beforeEach(module('critiqueApp'));

  // initialize a new instance of the filter before each test
  var personify;
  beforeEach(inject(function ($filter) {
    personify = $filter('personify');
  }));

  it('should return the input prefixed with "personify filter:"', function () {
    var text = 'angularjs';
    expect(personify(text)).toBe('personify filter: ' + text);
  });

});
