(function(){

    angular
        .module('income')
        .controller('IncomeController', ['incomeService', '$q', IncomeController]);


    function IncomeController( incomeService, $q ){

        var self = this;

        incomeService
            .loadIncome()
            .then( function(income) {
                self.income = [].concat(income);
            });
    };

})();
