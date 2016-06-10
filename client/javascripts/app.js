(function(){

  angular.module('ngMockUpApp',['ngRoute'])
    .config(function($routeProvider, $locationProvider){
      $routeProvider
        .when('/',{
          templateUrl:'../views/national_geographic/index.html',
          controller:'mainController',
          controllerAs:'vm'
        })
        .when('/news',{
          templateUrl:'../views/national_geographic/news.html',
          controller:'newsController',
          controllerAs:'vm'
        })
      $locationProvider.html5Mode(true);
    })
})()


