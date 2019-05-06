/**
 * Created by SeedofWind on 5/25/17.
 */
(function () {
      angular
          .module('BookAppMaker')
          .config(configuration);
      
      function configuration($routeProvider) {
             $routeProvider
                 .when('/',{
                       templateUrl: 'views/user/templates/gif.view.client.html',
                       controller: 'gifController',
                       controllerAs: 'model'
                 })

      }

})();