'use strict';

/* global $:true */

/**
 * @ngdoc directive
 * @name ngServiceRecordsApp.directive:fixedActions
 * @description
 * # fixedActions
 */
angular.module('ngServiceRecordsApp')
  .directive('fixedActions', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, el) {
        var setWidth = function() {
          $(el).width($(el).parents('[class*="col"]').width());
        };

        $(el).on('click', 'a', function() {
          var height = $(el).height();
          $('#records').css('marginBottom', height);
        });

        setWidth();
        $(window).resize(setWidth);
      }
    };
  });
