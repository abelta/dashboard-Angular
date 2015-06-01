(function(){


    angular
        .module('income')
        .service('incomeService', ['$q', IncomeService]);

    
    function IncomeService($q){

        var income = {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            data: (function(){
                var result = [];
                for (var i=0; i< 12; i++) {
                    result.push( Math.floor(Math.random() * 90) + 0 );
                }
                return [result];
            })()
        };


        return {
            loadIncome: function () {
                return $q.when(income);
            }
        }

    };

})();
