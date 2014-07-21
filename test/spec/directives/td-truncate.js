'use strict';

describe('Directive: tdTruncate', function () {

  // load the directive's module
  beforeEach(module('ngServiceRecordsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<td-truncate></td-truncate>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the tdTruncate directive');
  }));
});
