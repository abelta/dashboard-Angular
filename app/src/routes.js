(function(){

    angular
        .module('routes', ['ngRoute'])
        .config(function($routeProvider){

            $routeProvider
                .when('/users', {
                    templateUrl: 'src/users/view/indexUsers.html',
                    controller: 'UserController',
                    controllerAs: 'userCrtl'
                })
                .when('/income', {
                    templateUrl: 'src/income/view/indexIncome.html',
                    controller: 'IncomeController',
                    controllerAs: 'incomeCrtl'  
                })
                .otherwise({
                    redirectTo: '/'
                });

        });

})();