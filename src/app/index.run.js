(function() {
  'use strict';

  angular
    .module('noterious')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
