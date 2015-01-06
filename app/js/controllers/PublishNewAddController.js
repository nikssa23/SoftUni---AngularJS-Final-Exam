adsApp.controller('PublishNewAddController', function PublishNewAddController($scope, adsRequester) {
    $scope.publishAd = function (ad) {
        console.log(ad);
        adsRequester.publishNewAd(ad);
    }
});