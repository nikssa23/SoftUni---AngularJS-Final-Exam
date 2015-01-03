'user strict'
var adsApp = angular
    .module("adsApp", ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: '/templates/ads/list-ads.html'
        })
            .when('/register', {
                templateUrl : "/templates/register.html"
            })
    })
    .constant('pageSize', '10')
    .constant('startPage', '1')
    .constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/');
