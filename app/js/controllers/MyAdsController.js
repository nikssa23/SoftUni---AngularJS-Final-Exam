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

    $scope.fileSelected = function (fileInputField, edit) {
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function () {
                if (edit) {
                    $scope.editAd.changeImage = true;
                    $scope.editAd.imageDataUrl = reader.result;
                }
                else {
                    $scope.newAd.imageDataUrl = reader.result;
                }

                $scope.$apply();
                $(".ad-img").html("" +
                "<p>Click to changeimage</p>" +
                "<img src='" + reader.result + "`'>" +
                "<br /><br />");
            };

            reader.readAsDataURL(file);
        } else {
            $(".ad-img").html("<p>File type not supported!</p>");
        }
    };


}]);