/**
 * Created by SeedofWind on 5/25/17.
 */
(function () {
    angular
        .module('GifAppMaker')
        .controller('gifController', gifController);

    function gifController (searchService) {

        var model = this;


        model.searchGIF = searchGIF;


        function searchGIF(searchTerm) {
            searchService
                .searchGIF(searchTerm)
                .then(function (gif) {
                    model.url = gif.data.data[0].images.original.url;
                });
        }




    }
})();