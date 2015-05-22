'use strict';

describe('Service: userlist', function () {

  // load the service's module
  beforeEach(module('critiqueApp'));

  // instantiate service
  var userlist;
  beforeEach(inject(function (_userlist_) {
    userlist = _userlist_;
  }));

  it('should do something', function () {
    expect(!!userlist).toBe(true);
  });

});
