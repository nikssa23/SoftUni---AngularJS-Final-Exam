'user strict'
var adsApp = angular
    .module("adsApp", ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '/templates/home.html'
            })
            .when('/register', {
                templateUrl: "/templates/register.html"
            })
            .when('/ads',{
                templateUrl: '/templates/ads/list-ads.html',
                controller : 'LoadAdsController'
            })
    })
    .constant('pageSize', '10')
    .constant('startPage', '1')
    .constant('baseUrl', 'http://softuni-ads.azurewebsites.net/api/')
    .filter('range', function () {
        return function (input, total) {
            total = parseInt(total);
            for (var i = 0; i < total; i++)
                input.push(i + 1);
            return input;
        };
    });

$('.selectpicker').selectpicker();