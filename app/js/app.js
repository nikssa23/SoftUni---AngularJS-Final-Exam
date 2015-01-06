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
            .when('/myAds',{
                templateUrl: '/templates/ads/my-ads.html'
            })
            .when('/myAds/delete/:id',{
                templateUrl:"templates/ads/delete-my-ad.html"
            })
            .when('/myAds/edit/:id',{
                templateUrl:"templates/ads/edit-my-ad.html"
            })
            .when('/addNew',{
                templateUrl: '/templates/ads/add-new.html'
            })
            .when('/profile',{
                templateUrl: '/templates/profile.html'
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