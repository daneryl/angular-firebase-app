'use strict';

angular.module('tablaContenidos')
.directive('sortable', function(){

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      $(element).nestedSortable({
        handle: 'div',
        placeholder: 'placeholder',
        revert: 150,
        items: 'li',
        listType:'ul',
        toleranceElement: '> div'
      });

      $(element).on("sortstop", function( event, ui ) {
        console.log(ui.item.scope().section);
        console.log(ui.item.parent('ul').scope().section);
      } );

    }
  };
});
