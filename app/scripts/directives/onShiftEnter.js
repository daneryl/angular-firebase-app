'use strict';

angular.module('app')
.directive('onShiftEnter', function(hotkeys, $parse) {
  return function(scope, element, attrs) {

    element.on('focus', function() {
      hotkeys.add({
        combo: 'shift+enter',
        description: 'This one goes to 11',
        allowIn: ['INPUT'],
        callback: function() {
          $parse(attrs.onShiftEnter)(scope);
        }
      });
    });

    element.on('blur', function() {
      hotkeys.del('shift+enter');
    });

  };
});
