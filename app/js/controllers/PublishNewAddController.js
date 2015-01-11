adsApp.controller('PublishNewAddController', function PublishNewAddController($scope, adsRequester,SharedContent,$location) {
    $scope.publishAd = function (ad) {

        adsRequester.publishNewAd(ad).$promise.then(function (data) {
            $location.path('/myAds');
            SharedContent.setModalMessage(data.message);
        }, function (error) {
            console.log(error.data.message);
        })
    }

    $scope.ad ={};
    $scope.changeImage = false;

    $scope.fileSelected = function (fileInputField, edit) {
        var file = fileInputField.files[0];
        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();
            reader.onload = function () {
                if (edit) {
                  //  $scope.ad.changeImage = true;
                    $scope.ad.imageDataUrl = reader.result;
                }
                else {
                  //  $scope.ad.changeImage = true;
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


});