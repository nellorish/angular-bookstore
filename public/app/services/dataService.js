(function() {

    //noinspection JSUnresolvedFunction
    angular.module('app')
        .factory('dataService', [ '$q','$timeout',dataService]);

		    //API for the service

            function dataService($q,$timeout) {
                return {

                    getAllBooks: getAllBooks,
                    getAllReaders: getAllReaders
                };
            }
            function getAllReaders(){

                return [
                    {
                        reader_id :1,
                        name : marie,
                        weeklyReadingGoal:315
                    },
                    {
                        reader_id :2,
                        name : John,
                        weeklyReadingGoal:315
                    }
                ];
             }

             var deferred = $q.defer();
            $timeout(function(){

                var sucessful = false;

                if(sucessful){

                    deferred.resolve(bookArray);
                } else {

                    deferred.reject("Error Enterrring the whatever")
                }


                return deferred.promise;
                }
            ,1000);



		    function getAllBooks() {

                return [{
                    book_id: 1,
                    title: 'Harry Potter and the Deathly Hallows',
                    author: 'J.K. Rowling',
                    yearPublished: 2000
                }, {
                    book_id: 2,
                    title: 'The Cat in the Hat',
                    author: 'Dr. Seuss',
                    yearPublished: 1957
                }, {
                    book_id: 3,
                    title: 'Encyclopedia Brown, Boy Detective',
                    author: 'Donald J. Sobol',
                    yearPublished: 1963
                }];
            }

})();
