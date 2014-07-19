'use strict';

describe('Book controller', function () {

  var scope;

  beforeEach(module('app'));

  beforeEach(inject(function($controller) {
    scope = {};
    scope.book = {
      title: 'Libro 1',
      sections: [{
        title: 'Introducción',
        sections:[{
          title: 'Motivación'
        },{
          title:'Reseña historica',
          sections:[{
            title: 'Origen'
          },{
            title:'Trabajos preliminares'
          }]
        },{
          title: 'Soluciones actuales'
        },{
          title: 'Objetivos de este libro Objetivos de este libro'
        }]
      },{
        title: 'Requisitos',
        sections: [{
          title: 'Hardware'
        }, {
          title: 'Software'
        }]
      }]
    };

    $controller('book', {
      $scope: scope
    });
  }));

  describe('add()', function(){
    it('should add a section based on parent and current position', function(){
      scope.add(scope.book.sections, 1);
      expect(scope.book.sections.length).toBe(3);
      expect(scope.book.sections[1].title).toBe('');
      expect(scope.book.sections[1].sections).toEqual([]);
    });
  });

  describe('add_inside()', function(){
    it('should add a section inside another at the end of the array', function(){
      scope.add_inside(scope.book.sections[1]);
      expect(scope.book.sections[1].sections.length).toBe(3);
      expect(scope.book.sections[1].sections[2].title).toBe('');
      expect(scope.book.sections[1].sections[2].sections).toEqual([]);
    });

    it('should ccreate sections array on section if nos exists', function(){
      scope.add_inside(scope.book.sections[1].sections[0]);
      expect(scope.book.sections[1].sections[0].sections.length).toBe(1);
      expect(scope.book.sections[1].sections[0].sections[0].title).toBe('');
      expect(scope.book.sections[1].sections[0].sections[0].sections).toEqual([]);
    });
  });

  describe('remove()', function(){
    it('should remove a section based on parent', function(){
      scope.remove(scope.book.sections, 1);
      expect(scope.book.sections[1]).not.toBeDefined();
    });
  });

});
