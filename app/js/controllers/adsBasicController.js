

adsApp.controller("adsBasicController",
    function adsBasicController($scope,adsComponents){
        adsComponents.getTowns().then(function(data){
            $scope.towns = data;
        });
    });