

adsApp.controller("adsBasicController",
    function adsBasicController($scope,adsComponents,SharedContent){
        $scope.towns = adsComponents.getTowns();
        $scope.categories = adsComponents.getCategories();

    });