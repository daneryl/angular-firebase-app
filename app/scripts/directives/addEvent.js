'use strict';

angular.module('app')
.directive('addEvent', function(hotkeys, $parse) {
  return function(scope, element, attrs) {


    var splited_expression = attrs.addEvent.split(' on ');

    var method = splited_expression[0];
    var combo = splited_expression[1];

    element.on('focus', function() {
      hotkeys.add({
        combo: combo,
        description: 'This one goes to 11',
        allowIn: ['INPUT'],
        callback: function() {
          $parse(method)(scope);
        }
      });
    });

    element.on('blur', function() {
      hotkeys.del(combo);
    });

  };
});
