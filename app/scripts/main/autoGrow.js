'use strict';

angular.module('app')
.directive('autoGrow', function(){

  return {
    restrict: 'A',
    link: function(scope, element) {

      scope.$watch(function() {
        return $(element).val();
      }, function() {

        if(!$(element).data('autogrowId')){
          $(element).autoGrow(5);
        }

      });
    }
  };
});
