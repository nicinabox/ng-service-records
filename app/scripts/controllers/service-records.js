'use strict';

/**
 * @ngdoc function
 * @name ngServiceRecordsApp.controller:ServiceRecordsCtrl
 * @description
 * # ServiceRecordsCtrl
 * Controller of the ngServiceRecordsApp
 */
angular.module('ngServiceRecordsApp')
  .controller('ServiceRecordsCtrl', function ($scope, $filter) {
    var newRecord = function() {
      return {
        date: $filter('date')(new Date(),'yyyy-MM-dd')
      };
    };

    $scope.record   = newRecord();
    $scope.reminder = '';

    $scope.addServiceRecord = function() {
      $scope.vehicle.records.push($scope.record);
      $scope.record = newRecord();
    };

    $scope.addReminder = function() {
      $scope.vehicle.reminders.push($scope.reminder);
      $scope.reminder = '';
    };
  });
