'use strict';

angular.module('tablaContenidos')
.controller('MainCtrl', function ($scope) {

  $scope.book = {
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

  $scope.delete = function() {
    $scope.book.sections = _.without($scope.book.sections, $scope.book.sections[0]);
  };

  $scope.$watch('book', function() {
    //console.log(value);
  }, true);

});
