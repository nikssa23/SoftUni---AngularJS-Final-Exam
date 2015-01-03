'use strict';

adsApp.factory("adsComponents",

    function adsComponents($resource,$http,$q) {
        var towns = $resource('http://softuni-ads.azurewebsites.net/api/towns');
        var categories = $resource('http://softuni-ads.azurewebsites.net/api/categories');

    return {
        getTowns : function () {
            return towns.query();
        },
        getCategories : function () {
            return categories.query();
        }
    };

});