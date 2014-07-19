'use strict';

angular.module('app')
.directive('markNodeOnHover', function(){

  return {
    restrict: 'A',
    link: function(scope, element) {
      $(element).on('mouseenter', function() {
        $(element).parents('li').eq(0).addClass('to-delete');
      });

      $(element).on('mouseleave', function() {
        $(element).parents('li').eq(0).removeClass('to-delete');
      });
    }
  };
});
