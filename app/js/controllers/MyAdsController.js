adsApp.controller('MyAdsController', function MyAdsController($scope,$routeParams,adsRequester, $location, SharedContent,userRequester) {

    if(!userRequester.checkUserLogin()){
        $location.path('/home');
    }
    $scope.changeImage = false;
    $scope.haveAds = false;

    adsRequester.getMyAds().$promise.then(function (data) {
        if((data.ads).length > 0){
            $scope.haveAds = true;
        }
        $scope.myAds = data.ads;
    });

    $scope.checkIsInactive=function(string){
        if(string === "Inactive"){
            return true;
        }else{
            return false;
        }
    }

    $scope.publishAdAgain = function(ad){
        adsRequester.PublishAdAgain(ad).$promise.then(function(data){
            SharedContent.setModalMessage(data.message);
        },function(error){
            SharedContent.setModalMessage(error.message);
        })
    }

});