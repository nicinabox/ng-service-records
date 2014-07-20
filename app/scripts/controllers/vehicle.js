'use strict';

/**
 * @ngdoc function
 * @name ngServiceRecordsApp.controller:VehicleCtrl
 * @description
 * # VehicleCtrl
 * Controller of the ngServiceRecordsApp
 */
angular.module('ngServiceRecordsApp')
  .controller('VehicleCtrl', function ($scope) {
    $scope.vehicles = window.data;
    $scope.vehicle = {};

    $scope.addVehicle = function() {
      $scope.vehicles.push({
        id: $scope.vehicles.length + 1,
        name: $scope.name
      });
      $scope.name = '';
    };

    $scope.setActive = function(vehicle) {
      $scope.vehicle = vehicle;
    };

    $scope.isActive = function(vehicle) {
      return $scope.vehicle === vehicle;
    };

    $scope.setActive($scope.vehicles[0]);
  });
