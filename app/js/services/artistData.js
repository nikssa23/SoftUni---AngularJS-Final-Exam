'use strict';
musicApp.factory('artistData', function artistData($resource /*$http,$q, $log*/) {

    var resources = $resource('/data/artist/:id', {id: '@id'})

    return {
        getArtist: function (id) {
            return resources.get({id: id});

            //var defer  = $q.defer();
            //$http({method: "GET", url: "/data/artist/" + id})
            //    .success(function (data, status, headers, config) {
            //        defer.resolve(data);
            //    })
            //    .error(function (data, status, headers, config) {
            //      defer.reject(data);
            //    });
            //
            //return defer.promise;
        },
        saveArtist : function(artist){
            artist.id = 999;
            resources.save(artist);
        }
    }
});
