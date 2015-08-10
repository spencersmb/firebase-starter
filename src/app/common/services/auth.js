(function() {
  'use strict';

  angular
    .module('noterious.common')
    .factory('Auth', auth);

  /** @ngInject */
  function auth($firebaseAuth, FIREBASE_URL) {

    var ref = new Firebase(FIREBASE_URL);
    //return $firebaseAuth(ref);
    var authRef = $firebaseAuth(ref);

    var Auth = {
      resolveUser: function() {
        //checks authentication state - are they logged in or not
        //will return null if no user
        return authRef.$getAuth();
        //return authRef.$requireAuth();
      },
      login: function(user){
        //auth with password from firebase API
        return authRef.$authWithPassword(user, function(){

          //remember login until browser closed.
        },{remember: "sessionOnly"});
      },
      logout: function(){
        authRef.$unauth();
      },
      register: function(user){
        return authRef.$createUser({
          email: user.email,
          password: user.password
        });
      },
      createProfile: function(user){
        var profile = {
          username: user.username,
          profileImage: user.password.profileImageURL
        };
        var profileRef = ref.child('profile').child(user.uid);
        //set user with the id of X with the profile object
        return profileRef.set(profile);
      }
    };

    return Auth;
  }

})();
