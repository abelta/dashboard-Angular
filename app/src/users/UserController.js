(function(){

  angular
       .module('users')
       .controller('UserController', [
          'userService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          UserController
       ]);

  
  function UserController( userService, $mdSidenav, $mdBottomSheet, $log, $q) {
  
    var self = this;

    self.selected     = null;
    self.users        = [ ];

    userService
          .loadAllUsers()
          .then( function( users ) {
            self.users    = [].concat(users);
            self.selected = users[0];
          });


  }

})();
