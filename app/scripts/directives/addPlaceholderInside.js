'use strict';

angular.module('app')
.directive('addPlaceholderInside', function(){

  return {
    restrict: 'A',
    link: function(scope, element) {
      var placeholder = $('<li class="placeholder"><span class="glyphicon glyphicon-hand-left"></span></li>');
      $(element).on('mouseenter', function() {
        var parent = $(element).parents('li').eq(0).find('ul').eq(0);
        placeholder.appendTo(parent);
      });

      $(element).on('mouseleave', function() {
        placeholder.detach();
      });

    }
  };
});
