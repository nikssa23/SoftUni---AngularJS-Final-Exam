adsApp.controller("LoadAdsController",
    function LoadAdsController($scope, adsRequester, SharedContent) {
        $scope.filterPagination = false;

        adsRequester.getAdsList().$promise.then(function (data) {
            $scope.adsList = data;
        }, function (error) {
            SharedContent.setModalMessage(error.message);
        });

        $scope.selectCategory = function (categoryId) {
            SharedContent.selectCategory(categoryId);
            adsRequester.getAdsByFilter().$promise.then(function (data) {
                $scope.adsList = data;
            }, function (error) {
                SharedContent.setModalMessage(error.message);
            });

            $scope.filterPagination = true;
        }

        $scope.selectTown = function (townId) {
            SharedContent.selectTown(townId);
            adsRequester.getAdsByFilter().$promise.then(function (data) {
                $scope.adsList = data;
            }, function (error) {

            });

            $scope.filterPagination = true;

        }

        $scope.selectPage = function (page) {
            SharedContent.selectPage(page);
            if ($scope.filterPagination = false) {
                SharedContent.selectTown(null);
                SharedContent.selectCategory(null);
                adsRequester.getAdsByFilter().$promise.then(function (data) {
                    $scope.adsList = data;
                }, function (error) {

                });
            } else {
                adsRequester.getAdsByFilter().$promise.then(function (data) {
                    $scope.adsList = data;
                }, function (error) {

                });

            }

        }


    });

