'use strict';

/* global confirm:true */

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
      $scope.vehicle.records = $scope.vehicle.records || [];
      $scope.vehicle.records.push($scope.record);
      $scope.record = newRecord();
      $scope.toggleServiceForm();
    };

    $scope.addReminder = function() {
      $scope.vehicle.reminders = $scope.vehicle.reminders || [];
      $scope.vehicle.reminders.push($scope.reminder);
      $scope.reminder = '';
    };

    $scope.removeReminder = function(index) {
      var confirmed = confirm('Really remove reminder "'+
          $scope.vehicle.reminders[index] +'"?');

      if (!confirmed) { return; }
      $scope.vehicle.reminders.splice(index, 1);
    };

    $scope.removeRecord = function(index) {
      var confirmed = confirm('Really remove record "'+
        $scope.vehicle.records[index].notes +'"?');

      if (!confirmed) { return; }
      $scope.vehicle.records.splice(index, 1);
    };

    $scope.toggleServiceForm = function() {
      if ($scope.showServiceForm) {
        $scope.showServiceForm = false;
      } else {
        $scope.showServiceForm = true;
      }

      $scope.showReminderForm = false;
    };

    $scope.toggleReminderForm = function() {
      if ($scope.showReminderForm) {
        $scope.showReminderForm = false;
      } else {
        $scope.showReminderForm = true;
      }

      $scope.showServiceForm = false;
    };
  });
