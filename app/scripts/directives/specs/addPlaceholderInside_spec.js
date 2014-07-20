'use strict';

describe('Directive: addPlaceholderInside', function() {

  var scope;
  var list;
  var element;

  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, $compile){
    list = $('<ul><li><span add-placeholder-inside></span><ul></ul></li><li></li></ul>');
    scope = $rootScope.$new();
    $compile(list)(scope);
    element = $(list).find('span');
    scope.$digest();
  }));

  describe('on mouseenter', function(){
    it('should add a placeholder inside the child ul on last spot', function(){
      $(element).trigger('mouseenter');
      var placeholder = $(list).find('ul li.placeholder');
      expect(placeholder.length).toBe(1);
    });
  });

  describe('on ouseleave', function(){
    it('should remove the placeholder', function(){
      $(element).trigger('mouseenter');
      $(element).trigger('mouseleave');
      var placeholder = $(list).find('li.placeholder');
      expect(placeholder.length).toBe(0);
    });
  });

});
