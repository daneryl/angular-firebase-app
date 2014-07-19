
'use strict';

describe('Directive: alert', function() {

  var scope;
  var animate;
  var element;

  beforeEach(module('app'));

  beforeEach(inject(function($rootScope, $compile, $animate){
    spyOn($animate, 'enabled');
    animate = $animate;
    element = $('<div ui-tree-options></div>');
    scope = $rootScope.$new();
    $compile(element)(scope);
    scope.$digest();
  }));

  describe('when beforeDrop event', function(){
    it('should disable angularjs animations', function(){
      scope.uiTreeOptions.beforeDrop();
      expect(animate.enabled).toHaveBeenCalledWith(false);
    });
  });

  describe('when dropped event', function(){
    it('should enable angularjs animations', function(){
      scope.uiTreeOptions.dropped();
      expect(animate.enabled).toHaveBeenCalledWith(true);
    });
  });

});
