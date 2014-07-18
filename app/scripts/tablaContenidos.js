'use strict';

angular.module('tablaContenidos', ['ngAnimate', 'ngSanitize', 'ngRoute', 'ui.tree'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
