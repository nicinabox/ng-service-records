'use strict';

/* global $:true */

/**
 * @ngdoc directive
 * @name ngServiceRecordsApp.directive:affix
 * @description
 * # affix
 */
angular.module('ngServiceRecordsApp')
  .directive('affix', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, el, attrs) {
        setTimeout(function() {
          var options = {
            offset: {}
          };
          options.offset[attrs.affix || 'top'] = 0;

          $(el).width($(el).width());
          $(el).affix(options);

          var resize = function() {
            $(el)
              .width('auto')
              .width($(el).width());
          };

          scope.$watch('vehicles.length', resize);
          $(window).resize(resize);

        }, 200);
      }
    };
  });
