'use strict';

angular.module('app', [
  'ngAnimate', 
  'ngSanitize', 
  'ngRoute', 
  'ui.tree',
  'cfp.hotkeys'
])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'partials/book.html',
      controller: 'book'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
