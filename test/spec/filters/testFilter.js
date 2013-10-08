'use strict';

describe('Filter: testFilter', function () {

  // load the filter's module
  beforeEach(module('ecouponsApp'));

  // initialize a new instance of the filter before each test
  var testFilter;
  beforeEach(inject(function($filter) {
    testFilter = $filter('testFilter');
  }));

  it('should return an integer of an input string, or false for non-parseable entry"', function () {
    var text = 'Ari';
    expect(testFilter(text)).toBe('irA');
  });

});
