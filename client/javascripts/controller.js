(function(){

  angular.module('ngMockUpApp')
  .controller("mainController", mainController)
  .controller("newsController",newsController)
  .controller("navbarController",navbarController)
  
  function navbarController(){
    var vm = this;
  }

  function mainController(){
    var vm = this;
    vm.allPost = [
    {title:'book', content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. eque.", img:"http://lorempixel.com/220/200/"},
    {title:'rock', content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. eque.", img:"http://lorempixel.com/220/200/"},
    {title:'UK', content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. eque.", img:"http://lorempixel.com/220/200/"},
    {title:'UK', content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. eque.", img:"http://lorempixel.com/220/200/"},
    {title:'UK', content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. eque.", img:"http://lorempixel.com/220/200/"},
    {title:'UK', content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. eque.", img:"http://lorempixel.com/220/200/"},
    {title:'UK', content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. eque.", img:"http://lorempixel.com/220/200/"},
    {title:'UK', content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. eque.", img:"http://lorempixel.com/220/200/"},
    ]
  }

  function newsController(){
    var vm = this;
  }

  

})()




