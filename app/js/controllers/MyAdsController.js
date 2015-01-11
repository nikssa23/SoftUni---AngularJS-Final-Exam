adsApp.controller('MyAdsController', ['$scope', '$routeParams', 'adsRequester', '$location', 'SharedContent', function MyAdsController($scope,$routeParams,adsRequester, $location, SharedContent) {

    $scope.changeImage = false;
    $scope.haveAds = false;

    adsRequester.getMyAds().$promise.then(function (data) {
        if((data.ads).length > 0){
            $scope.haveAds = true;
        }
        $scope.myAds = data.ads;
    });


    adsRequester.getAdById($routeParams.id).$promise.then(
        function (data) {
            $scope.ad = data;

            if (data.imageDataUrl !== null) {
                $scope.changeImage = true;
            }
        }, function (error) {

        });

    $scope.editMyAd = function (ad) {
        adsRequester.updateMyAd(ad);
    }

    $scope.deleteAd = function () {
        adsRequester.deleteAd($routeParams.id).$promise.then(function (data) {
            SharedContent.setModalMessage(data.message);
            $location.path('/myAds');

        }, function (error) {
            SharedContent.setModalMessage(error.message);
            $location.path('/myAds');

        });
    }

    $scope.fileSelected = function (fileInputField, edit) {
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function () {
                if (edit) {
                    $scope.ad.changeImage = true;
                    $scope.ad.imageDataUrl = reader.result;
                }
                else {
                    $scope.ad.changeImage = true;
                    $scope.ad.imageDataUrl = reader.result;
                }

                $scope.$apply();
                $(".ad-img").html("" +
                "<p>Click to changeimage</p>" +
                "<img src='" + reader.result + "'>" +
                "<br /><br />");
            };

            reader.readAsDataURL(file);
        } else {
            $(".ad-img").html("<p>File type not supported!</p>");
        }
    };

    $scope.cancelDelete= function (){
        $location.path('/myAds');
    }
    $scope.cancelEdit= function (){
        $location.path('/myAds');
    }

}]);