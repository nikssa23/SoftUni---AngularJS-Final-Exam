'use strict';

adsApp.factory("adsComponents",

    function adsComponents($resource,$http,$q,baseUrl) {
        var towns = $resource(baseUrl+'towns');
        var categories = $resource(baseUrl+'categories');
        var adsList = $resource(baseUrl + 'ads?pagesize=10&startpage=1')

    return {
        getTowns : function () {
            return towns.query();
        },
        getCategories : function () {
            return categories.query();
        },
        getAdsList : function(){
            return adsList.get();
        }
    };

});