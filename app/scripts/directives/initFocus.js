'use strict';
angular.module('app')
.directive('initFocus', function() {
  return {
    priority:999999,
    link: function(scope, elm) {
      $(elm).trigger('focus');
    }
  };
});
