/**
 * Created by SeedofWind on 6/9/17.
 */
(function () {
    angular
        .module('BookAppMaker')
        .service('searchService', searchService);

    function searchService($http) {

        this.searchGIF= searchGIF;

        var urlBase = url = "http://api.giphy.com/v1/gifs/search?q=KEYWORD_HERE&api_key=rhnLzBheeSSvhNRKDF2RCgEQw7oHh2Pi&limit=1";


        function searchGIF(searchText) {
            var url = urlBase
                .replace("KEYWORD_HERE", searchText);
            return $http.get(url)


        }

    }
})();