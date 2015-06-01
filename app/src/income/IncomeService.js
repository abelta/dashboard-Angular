(function(){


    angular
        .module('income')
        .service('IncomeService', ['$q', IncomeService]);

    
    function IncomeService($q){

        var income = {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                    label: "Income",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    //data: [65, 59, 80, 81, 56, 55, 40]
                    data: function(){
                        var result = [];
                        for (var i=0; i<= 12; i++) {
                            result.push( Math.floor(Math.random() * 90) + 0 );
                        }
                        return result;
                    }
                }
            ]
        };


        return {
            loadIncome: function () {
                return $q.when(income);
            }
        }

    };

})();
