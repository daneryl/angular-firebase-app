'use strict';

angular.module('app')
.directive('uiTreeOptions', function($animate){

  return {
    restrict: 'A',
    link: function(scope) {
      scope.uiTreeOptions =  {
        beforeDrop: function() {
          $animate.enabled(false);
        },
        dropped: function() {
          $animate.enabled(true);
        }
      };
    }
  };
});
