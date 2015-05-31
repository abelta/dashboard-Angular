(function(){

    angular
       .module('dashboard', [])
       .controller('DashboardController', ['$mdSidenav', '$mdBottomSheet', '$log', '$q', DashboardController]);



    function DashboardController($mdSidenav, $mdBottomSheet, $log, $q) {

        
        this.indexUsers = function() {
            console.log('indexUserss');
            
        };


        this.indexIncome = function() {
            console.log('indexIncomes');
            
        };
        

    };

})();
