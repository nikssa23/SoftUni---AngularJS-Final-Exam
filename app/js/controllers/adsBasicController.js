

adsApp.controller("adsBasicController",
    function adsBasicController($scope,adsComponents){
        $scope.towns = adsComponents.getTowns();
        $scope.categories = adsComponents.getCategories();
    });