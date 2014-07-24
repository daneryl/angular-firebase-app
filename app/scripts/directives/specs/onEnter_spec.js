'use strict';

describe('Directive: onEnter', function() {

  var scope;
  var element;
  var hotkeys = {add:function() {}};

  beforeEach(module('app'));

  beforeEach(module(function($provide) {
    $provide.value('hotkeys', hotkeys);
  }));

  beforeEach(inject(function($rootScope, $compile){
    element = $('<input on-enter="method()"/>');
    scope = $rootScope.$new();
    scope.method = function() {};
    $compile(element)(scope);
    scope.$digest();

    spyOn(hotkeys, 'add');
    spyOn(scope, 'method');
  }));

  describe('on focus', function(){
    it('should add should add enter event that executed method passed', function(){
      $(element).triggerHandler('focus');
      var event_added = hotkeys.add.mostRecentCall.args[0];
      event_added.callback();

      expect(event_added.combo).toBe('enter');
      expect(scope.method).toHaveBeenCalled();

    });
  });

});

