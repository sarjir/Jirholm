'use strict';

/**
 * @ngdoc overview
 * @name Jirholm
 * @description
 * # Jirholm
 *
 * Main module of the application.
 */

/*var app = angular.module('Jirholm', ['ngRoute']);

app .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
        templateUrl: 'views/landing.html',
        controller: 'AddOrderController'
    }).
      otherwise({
        redirectTo: '/AddNewOrder'
      });
}]);

app.controller('AddOrderController', function($scope) {
     
    $scope.message = 'This is Add new order screen';
     
});
 
 
app.controller('ShowOrdersController', function($scope) {
 
    $scope.message = 'This is Show orders screen';
 
});*/

var sampleApp = angular.module('Jirholm', ['ngRoute']);
  
sampleApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/landing.html',
        controller: 'JirholmCtrl'
      }).
      otherwise({
        redirectTo: '/addOrder'
      });
  }]);
