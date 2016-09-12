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
      otherwise({
        redirectTo: '/main'
      });
  }]);
var my= angular.module('myModule', []);