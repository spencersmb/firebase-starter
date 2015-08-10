(function() {
  'use strict';

  angular
    .module('noterious')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController(user, $location, Auth) {

    if(user){
      $location.path('/');
    }

    var register = this;
    
    register.user = {
      email:"",
      username:"",
      password:""
    };

    //if not logged in create scope function for registering them
    register.signUp = function () {

      //first register the user
      Auth.register(register.user).then(function(){
        //then log them in
        return Auth.login(register.user).then(function (user) {
          console.log(user);
          //after login -> pass in the user and create the user profile with the new data
          user.username = register.user.username;
          return Auth.createProfile(user);
        }).then(function (user) {
          console.log(user);
          //then redirect the authenticated user
          $location.path('/');
        });
      });
    };
  } // end function

})();
