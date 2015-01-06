adsApp.controller('PublishNewAddController', function PublishNewAddController($scope, adsRequester) {
    $scope.publishAd = function (ad) {
        console.log(ad);
        adsRequester.publishNewAd(ad).$promise.then(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error.data.message);
        })
    }
});