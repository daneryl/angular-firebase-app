'use strict';

describe('Directive: addPlaceholder', function() {

  var scope;
  var list;
  var element;

  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, $compile){
    list = $('<ul><li><span add-placeholder></span></li><li></li></ul>');
    scope = $rootScope.$new();
    $compile(list)(scope);
    element = $(list).find('span');
    scope.$digest();
  }));

  describe('on mouseenter', function(){
    it('should add a placeholder li next to the current one', function(){
      $(element).trigger('mouseenter');
      var placeholder = $(list).find('li').eq(1);
      expect(placeholder.hasClass('placeholder')).toBe(true);
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
