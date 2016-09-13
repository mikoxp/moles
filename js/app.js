var myApp = angular.module('myApp', [
  'ngRoute',
  'myModule',
  'ngAnimate',
   'ngSanitize', 
   'ui.bootstrap'
])
myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'web/main.html',
        controller: 'myCtrl'
      }).
       when('/tutorials', {
        templateUrl: 'web/tutorials.html',
        controller: 'tutorialsCtrl'
      }).
      otherwise({
        redirectTo: '/main'
      });
  }]);
var my= angular.module('myModule', []);