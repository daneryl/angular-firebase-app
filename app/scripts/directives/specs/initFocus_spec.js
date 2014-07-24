'use strict';

describe('Directive: autoFocus', function () {

  beforeEach(module('app'));

  var element;

  beforeEach(inject(function($rootScope, $compile){
    element = $('<input init-focus/>');
    spyOn(element[0], 'focus');
    var scope = $rootScope.$new();
    $compile(element)(scope);
    scope.$digest();
  }));

  it('should focus the element', function(){
    expect(element[0].focus).toHaveBeenCalled();
  });

});
