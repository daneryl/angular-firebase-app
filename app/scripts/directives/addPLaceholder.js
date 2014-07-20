'use strict';

angular.module('app')
.directive('addPlaceholder', function(){

  return {
    restrict: 'A',
    link: function(scope, element) {
      var placeholder = $('<li class="placeholder"><span class="glyphicon glyphicon-hand-left"></span></li>');
      $(element).on('mouseenter', function() {
        var parent = $(element).parents('li').eq(0);
        placeholder.insertAfter(parent);
      });

      $(element).on('mouseleave', function() {
        placeholder.detach();
      });

      $(element).on('click', function() {
        var parent = $(element).parents('li').eq(0);
        placeholder.insertAfter(parent);
      });

    }
  };
});
