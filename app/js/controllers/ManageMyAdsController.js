adsApp.controller('ManageMyAdsController', function ManageMyAdsController($scope,$routeParams,adsRequester, $location, SharedContent,userRequester) {

    if(!userRequester.checkUserLogin()){
        $location.path('/home');
    }
    $scope.changeImage = false;



    adsRequester.getAdById($routeParams.id).$promise.then(
        function (data) {
            $scope.ad = data;

            if (data.imageDataUrl !== null) {
                $scope.changeImage = true;
            }
        }, function (error) {

        });

    $scope.editMyAd = function (ad) {
        adsRequester.updateMyAd(ad).$promise.then(function (data) {
            SharedContent.setModalMessage(data.message);
        }, function (error) {
            SharedContent.setModalMessage(error.message);
            $location.path('/myAds');

        });
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
                 $(".ad-img").html("" +
                "<p>Click to changeimage</p>" +
                "<img src='" +  $scope.ad.imageDataUrl + "'>" +
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
});


