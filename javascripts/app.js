(function(){

  angular.module('ngMockUpApp',['ngRoute'])
    .config(function($routeProvider, $locationProvider){
      $routeProvider
        .when('/',{
          templateUrl:'../views/index.html',
          controller:'mainController',
          controllerAs:'vm'
        })
        .when('/news',{
          templateUrl:'../views/news.html',
          controller:'newsController',
          controllerAs:'vm'
        })
      $locationProvider.html5Mode(true);
    })
})()


