'use strict';

adsApp.factory("adsComponents",

    function adsComponents($resource,$http,$q,baseUrl) {
        var towns = $resource(baseUrl+'towns');
        var categories = $resource(baseUrl+'categories');

    return {
        getTowns : function () {
            return towns.query();
        },
        getCategories : function () {
            return categories.query();
        }
    };

});