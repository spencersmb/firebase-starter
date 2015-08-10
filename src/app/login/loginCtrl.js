(function() {
  'use strict';

  angular
    .module('noterious')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(user, $location, Auth) {

    if(user){
      $location.path('/');
    }

    var login = this;

    //variable to show refresh icon on ui during login process
    login.loading = false;

    //first build login object
    login.user = {
      email:"",
      password:"",
      register: false
    };

    function onLogin() {
      Auth.login(login.user)
        .then(onSuccess)
        .catch(onError)
        .finally(onCompletion);
    }

    function onSuccess(result) {
      //$state.go('boards');
      login.result = result;
      $location.path('/');
    }

    function onError(reason) {
      login.error = reason.message;
    }

    function onCompletion() {
      login.reset();
    }

    //submit user from HTML Form
    login.submitUser = function (user, isValid, isRegistering) {
      if (isValid) {
        login.loading = true;

        if (isRegistering) {
          //register();
        } else {
          onLogin();
        }
      }
    };

    login.reset = function(){
      login.loading = false;
      login.user = {
        email:"",
        password:"",
        register: false
      };
    };

  }

})();
