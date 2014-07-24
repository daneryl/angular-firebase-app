'use strict';
angular.module('app')
.directive('initFocus', function() {
  return function(scope, elm) {
    elm.focus();
  };
});
