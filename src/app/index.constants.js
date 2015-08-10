/* global malarkey:false, toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('noterious')
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('FIREBASE_URL', 'https://ng-news-clone.firebaseio.com/')
    .constant('moment', moment);

})();
