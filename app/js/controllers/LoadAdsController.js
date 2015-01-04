adsApp.controller("LoadAdsController",
    function LoadAdsController($scope, adsComponents) {
        $scope.adsList = adsComponents.getAdsList();

    });