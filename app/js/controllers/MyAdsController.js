adsApp.controller('MyAdsController', ['$scope', '$routeParams','adsRequester', function MyAdsController($scope, $routeParams, adsRequester) {
    adsRequester.getMyAds().$promise.then(function (data) {
        $scope.myAds = data.ads;
    });

    adsRequester.getAdById($routeParams.id).$promise.then(
        function (data) {
        $scope.ad = data;
        }, function (error) {

        });

    $scope.editMyAd = function(ad){
        adsRequester.updateMyAd(ad);
    }

    $scope.deleteAd = function(){
        adsRequester.deleteAd($routeParams.id).$promise.then(function (data){
            alert(data.message);
        },function (error) {

        });
    }
}]);