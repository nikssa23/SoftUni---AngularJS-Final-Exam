adsApp.controller('MyAdsController', function MyAdsController($scope, adsRequester) {
   adsRequester.getMyAds().$promise.then(function(data){
       $scope.myAds = data.ads;
   })
})