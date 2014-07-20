'use strict';

window.data = [
  {
    id: 1,
    name: '2005 Mini Cooper S',
    reminders: [
      'Oil service at 126000mi'
    ],
    records: [
      {
        date: '2013-08-20',
        mileage: '121555',
        notes: 'Purchase'
      },
      {
        date: '2013-08-21',
        mileage: '121600',
        notes: 'Change oil, oil filter, air filter, spark plugs'
      },
      {
        date: '2013-09-10',
        mileage: '122000',
        notes: 'Replace passenger axle'
      }
    ]
  },
  {
    id: 2,
    name: '2014 Moto Guzzi',
    reminders: [
      'Next service at 6000mi'
    ]
  },
  {
    id: 3,
    name: '1976 Honda CB200T'
  }
];

/**
 * @ngdoc overview
 * @name ngServiceRecordsApp
 * @description
 * # ngServiceRecordsApp
 *
 * Main module of the application.
 */
angular
  .module('ngServiceRecordsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
