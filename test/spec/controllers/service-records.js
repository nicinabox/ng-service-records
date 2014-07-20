'use strict';

describe('Controller: ServiceRecordsCtrl', function () {

  // load the controller's module
  beforeEach(module('ngServiceRecordsApp'));

  var ServiceRecordsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServiceRecordsCtrl = $controller('ServiceRecordsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
