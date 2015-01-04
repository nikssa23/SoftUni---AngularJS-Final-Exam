'use strict';

adsApp.factory("adsComponents",

    function adsComponents($resource,$http,$q,baseUrl) {
        var towns = $resource(baseUrl+'towns');
        var categories = $resource(baseUrl+'categories');
        var allAdsList = $resource(baseUrl + 'ads?pagesize=10&startpage=1')

    return {
        getTowns : function () {
            return towns.query();
        },
        getCategories : function () {
            return categories.query();
        },
        getAdsList : function(){
            return allAdsList.get();
        },
        loginUser : function(name,token){
            localStorage.setItem('username',name);
            localStorage.setItem('token',token);
        },
        getToken : function(){
            return localStorage.getItem('token');
        },
        getUsername: function () {
            return localStorage.getItem('username');
        },
        checkUserLogin: function(){
            if(localStorage.getItem('token') !=undefined){
                return true;
            }
            return false;
        }

    };

});