(function() {
  'use strict';

  angular
    .module('noterious')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController as register',
        resolve:{
          //check if user is logged in and inject user to ctrler
          user: function(Auth){
            console.log(Auth.resolveUser());
            return Auth.resolveUser();
          }
        }
      })
      .state('login', {
        url:'/login',
        templateUrl: 'app/login/login.html',
        controller:'LoginController as login',
        resolve:{
          //check if user is logged in and inject user to ctrler
          user: function(Auth){
            //console.log(Auth.resolveUser());
            return Auth.resolveUser();
          }
        }
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
