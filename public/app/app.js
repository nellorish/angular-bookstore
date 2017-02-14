(function() {

    var app = angular.module('app', []);

    app.provider('books', function(constants) {

        var includeVersionInTitle = false;


        return {
          setDesc: function(value) {
            desc = value;
          },
          setIncludeVersionInTitle: function (value) {
            includeVersionInTitle = value;
          },
        // PROVIRER COMES WITH GET FUNCTION
          $get: function() {


              var name = constants.APP_TITLE;
              var version = "1.0";
              var desc ='Track which books you read';


            if (includeVersionInTitle) {
                name += ' ' + version;
            }
            return {
              appName: name,
              appDesc: desc
            };        
          }  
        };
    });

    app.config(function (booksProvider) {
      booksProvider.setDesc("Track which books you read.");
      booksProvider.setIncludeVersionInTitle(true);
    });

}());
