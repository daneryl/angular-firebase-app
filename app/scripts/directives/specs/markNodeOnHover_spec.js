'use strict';

describe('Directive: markNodeOnHover', function() {

  var scope;
  var container;
  var element;

  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, $compile){
    var to_compile = $('<ul><li><span mark-node-on-hover></span></li></ul>');
    scope = $rootScope.$new();
    $compile(to_compile)(scope);
    element = $(to_compile).find('span');
    container = $(to_compile).find('li');
    scope.$digest();
  }));

  describe('on mouseenter', function(){
    it('should add to-delete class to li container', function(){
      $(element).trigger('mouseenter');
      expect($(container).hasClass('to-delete')).toBe(true);
    });
  });

  describe('on mouseleave', function(){
    it('should remove to-delete class to li container', function(){
      $(element).trigger('mouseenter');
      $(element).trigger('mouseleave');
      expect($(container).hasClass('to-delete')).toBe(false);
    });
  });

});
