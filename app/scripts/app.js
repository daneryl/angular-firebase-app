'use strict';

angular.module('app', [
  'ngAnimate',
  'ngSanitize',
  'ngRoute',
  'ui.tree',
  'cfp.hotkeys',
  'firebase'
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
