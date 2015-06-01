(function(){

    angular
        .module('income')
        .controller('IncomeController', ['incomeService', '$q', '$scope', IncomeController]);


    function IncomeController( incomeService, $q, $scope ){

        var self = this;
        
        incomeService
            .loadIncome()
            .then( function(income) {
                $scope.labels = income.labels;
                $scope.series = ['Income'];
                $scope.data = income.data;
            });
        
        
    };

})();
