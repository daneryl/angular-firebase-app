'use strict';

angular.module('tablaContenidos')
.directive('sortable', function(){

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      var original_parent;

      $(element).nestedSortable({
        handle: 'div',
        placeholder: 'placeholder',
        revert: 150,
        items: 'li',
        listType:'ul',
        toleranceElement: '> div'
      });

      $(element).on("sortstop", function( event, ui ) {
        var element_moved = ui.item.scope().section;
        var new_parent = ui.item.parent('ul').scope().section;
        console.log(original_parent);

        new_parent.sections.push(element_moved);
        _(original_parent.sections).without(element_moved);

        scope.$digest();

        console.log(scope.book);
      });

      $(element).on("sortstart", function( event, ui ) {
        original_parent = ui.item.parent('ul').scope().section;
      });

    }
  };
});
