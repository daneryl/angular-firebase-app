'use strict';

angular.module('app')
.controller('book', function ($scope, updateNumeration, $firebase) {

  $scope.book = {};

  //$scope.book = {
    //title: 'Libro 1',
    //sections: [{
      //title: 'Introducción',
      //sections:[{
        //title: 'Motivación',
        //sections: []
      //},{
        //title:'Reseña historica',
        //sections:[{
          //title: 'Origen',
          //sections: []
        //},{
          //title:'Trabajos preliminares',
          //sections: []
        //}]
      //},{
        //title: 'Soluciones actuales',
        //sections: []
      //},{
        //title: 'Objetivos de este libro Objetivos de este libro',
        //sections: []
      //}]
    //},{
      //title: 'Requisitos',
      //sections: [{
        //title: 'Hardware',
        //sections: []
      //}, {
        //title: 'Software',
        //sections: []
      //}]
    //}]
  //};

  //////
  var booksRef = new Firebase("https://levelap-tabla-conten.firebaseIO.com/books");
  $scope.books = $firebase(booksRef)

  $scope.newBook = null;
  $scope.addBook = function() {
    if( $scope.newBook ) {
      $scope.books.$add({title: $scope.newBook, sections:[]});
      $scope.newBook = null;
    }
  };

  $scope.setBook = function(book) {
    $scope.book = book;
  };
  //////

  updateNumeration($scope.book.sections);

  $scope.$watch('book.sections', function() {
    updateNumeration($scope.book.sections);
  }, true);

  $scope.add = function(sections, index) {
    var item = {title: '', sections:[]};
    sections.splice(index, 0, item);
  };

  $scope.add_inside = function(section) {
    var item = {title: '', sections:[]};
    section.sections = section.sections || [];
    section.sections.push(item);
  };

});
