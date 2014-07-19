'use strict';

angular.module('app')
.controller('book', function ($scope) {

  $scope.book = {
    title: 'Libro 1',
    sections: [{
      title: 'Introducción',
      sections:[{
        title: 'Motivación',
        sections: []
      },{
        title:'Reseña historica',
        sections:[{
          title: 'Origen',
          sections: []
        },{
          title:'Trabajos preliminares',
          sections: []
        }]
      },{
        title: 'Soluciones actuales',
        sections: []
      },{
        title: 'Objetivos de este libro Objetivos de este libro',
        sections: []
      }]
    },{
      title: 'Requisitos',
      sections: [{
        title: 'Hardware',
        sections: []
      }, {
        title: 'Software',
        sections: []
      }]
    }]
  };

  $scope.add = function(sections, index) {
    var item = {title: '', sections:[]};
    sections.splice(index, 0, item);
  };

  $scope.add_inside = function(section, index) {
    var item = {title: '', sections:[]};
    section.sections = section.sections || [];
    section.sections.push(item);
  };

  $scope.remove = function(sections, to_delete) {
    sections.splice(to_delete, 1);
  };

});
