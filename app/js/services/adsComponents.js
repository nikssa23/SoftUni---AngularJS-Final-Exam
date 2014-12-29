'use strict';

adsApp.factory("adsComponents",

    function adsComponents($http,$q) {
   // var towns = $resource('http://softuni-ads.azurewebsites.net/api/towns');

    return {
        getTowns : function () {
            //console.log(towns.get());
           // return JSON.stringify(towns.get());

            var defer  = $q.defer();
            $http({method: "GET", url: "http://softuni-ads.azurewebsites.net/api/towns" })
                .success(function (data, status, headers, config) {
                    defer.resolve(data);
                })
                .error(function (data, status, headers, config) {
                  defer.reject(data);
                });

            return defer.promise;
        }
    };
});