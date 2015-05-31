(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    
    // Initializes users randomly.
    var users = function(){
      var result = [];
      for (var i=0; i<= 20; i++) {
        result.push({
          name: faker.name.findName(),
          avatar: 'svg-' + (Math.floor(Math.random() * 6) + 1),
          email: faker.internet.email()
        });
      }
      return result;
    }();
    

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
