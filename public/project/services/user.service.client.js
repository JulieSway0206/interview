/**
 * Created by SeedofWind on 5/26/17.
 */
(function () {
    angular
        .module('BookAppMaker')
        .factory('userService', userService);

    function userService($http) {


    // api is an object with attribute findUserById, the value of which is findUserById that
    //     bind with the findUserById function below.
        var api = {
            findGifByTerm: findGifByTerm
        };
        return api;



       function searchService($http) {

               this.searchBook= searchBook;

               var urlBase = url = "http://api.giphy.com/v1/gifs/search?q=KEYWORD_HERE&api_key=dc6zaTOxFJmzC&limit=1";


               function searchBook(searchText) {
                   var url = urlBase
                       .replace("KEYWORD_HERE", searchText);
                   return $http.get(url)


               }

           }

    }

})();
