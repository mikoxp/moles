var myApp = angular.module('myApp', [
  'ngRoute',
  'myControllers'
]);
myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'web/main.html',
        controller: 'myCtrl'
      }).
      when('/about', {
        templateUrl: 'web/about.html',
        controller: 'aboutCtrl'
      }).
      otherwise({
        redirectTo: '/main'
      });
  }]);