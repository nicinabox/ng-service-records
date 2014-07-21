'use strict';

describe('Directive: affix', function () {

  // load the directive's module
  beforeEach(module('ngServiceRecordsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<affix></affix>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the affix directive');
  }));
});
