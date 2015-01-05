'use strict';

adsApp.factory("adsComponents",

    function adsComponents($resource, $http, $q, baseUrl) {
        var towns = $resource(baseUrl + 'towns');
        var categories = $resource(baseUrl + 'categories');
        var allAdsList = $resource(baseUrl + 'ads?pagesize=10&startpage=1');

        return {
            getTowns: function () {
                return towns.query();
            },
            getCategories: function () {
                return categories.query();
            },
            getAdsList: function () {
                return allAdsList.get();
            },
            makeUserLogged: function (name, token) {
                localStorage.setItem('username', name);
                localStorage.setItem('token', token);
            },
            registerUser: function (user) {
                var defer = $q.defer();
                $http.post(baseUrl + 'user/register',
                    {
                        username: user.username,
                        password: user.password,
                        confirmPassword: user.confirmPassword,
                        name: user.name,
                        email: user.email,
                        phone: user.phone,
                        townId: user.townId
                    }
                ).success(function (data, status, headers, config) {
                        defer.resolve(data);
                    })
                    .error(function (data, status, headers, config) {
                        defer.reject(data);
                    });

                return defer.promise;
            },
            getToken: function () {
                return localStorage.getItem('token');
            },
            getUsername: function () {
                return localStorage.getItem('username');
            },
            checkUserLogin: function () {
                var token = localStorage.getItem('token');
                if (token != null || token != undefined) {
                    return true;
                }
                return false;
            },
            loginUser: function (user) {
                var defer = $q.defer();
                $http.post(baseUrl + 'user/login',
                    {
                        username: user.username,
                        password: user.password
                    }
                ).success(function (data, status, headers, config) {
                        defer.resolve(data);
                    })
                    .error(function (data, status, headers, config) {
                        defer.reject(data);
                    });

                return defer.promise;
            },
            userLogout: function () {
                localStorage.removeItem('name');
                localStorage.removeItem('token');
            }
        };
    });