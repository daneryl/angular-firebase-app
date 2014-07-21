'use strict';

angular.module('app')
.directive('addPlaceholder', function(){

  return {
    restrict: 'A',
    link: function(scope, element) {
      var placeholder = $('<li class="placeholder"><span class="glyphicon glyphicon-hand-left"></span></li>');
      var section = $(element).parents('ul').eq(0);

      //falta testear el markado del ul !

      $(element).on('mouseenter', function() {
        var parent = $(element).parents('li').eq(0);
        section.addClass('mark-section')
        placeholder.insertAfter(parent);
      });

      $(element).on('mouseleave', function() {
        placeholder.detach();
        section.removeClass('mark-section')
      });

    }
  };
});
