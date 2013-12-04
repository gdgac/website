'use strict';

angular.module('gdgacApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'gdgPlus',
  'angularMoment'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
