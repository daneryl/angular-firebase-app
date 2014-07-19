'use strict';

angular.module('tablaContenidos')
.directive('autoGrow', function(){

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      scope.$watch(function() {
        return $(element).val();
      }, function() {

        if(!$(element).data('autogrowId')){
          $(element).autoGrow(5);
        }

      })
    }
  };
});
