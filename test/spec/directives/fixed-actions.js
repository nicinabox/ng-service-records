'use strict';

describe('Directive: fixedActions', function () {

  // load the directive's module
  beforeEach(module('ngServiceRecordsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fixed-actions></fixed-actions>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fixedActions directive');
  }));
});
