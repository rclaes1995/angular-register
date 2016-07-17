var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'app/home/home.html',
    controller: 'homeController'
  });
});
