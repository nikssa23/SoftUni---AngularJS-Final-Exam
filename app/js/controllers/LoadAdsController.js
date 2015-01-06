adsApp.controller("LoadAdsController",
    function LoadAdsController($scope,adsRequester) {
        $scope.adsList = adsRequester.getAdsList();

    });