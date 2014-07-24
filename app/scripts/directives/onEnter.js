'use strict';

angular.module('app')
.directive('onEnter', function(hotkeys, $parse) {
  return function(scope, element, attrs) {

    element.on('focus', function() {
      hotkeys.add({
        combo: 'enter',
        description: 'This one goes to 11',
        allowIn: ['INPUT'],
        callback: function() {
          $parse(attrs.onEnter)(scope);
        }
      });
    });

    element.on('blur', function() {
      console.log('blur');
    });

  };
});
