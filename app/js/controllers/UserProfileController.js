adsApp.controller('UserProfileController', function UserProfileController($scope, userRequester, SharedContent, $location) {

    if(!userRequester.checkUserLogin()){
        $location.path('/home');
    }

        userRequester.getUserProfile().$promise.then(function (data) {
            $scope.user = data;
        }, function (error) {
            SharedContent.setModalMessage(error.message);
        })

    $scope.updateProfile = function (user) {
        userRequester.updateUserProfile(user).$promise.then(function (data) {
            SharedContent.setModalMessage(data.message);
        }, function (error) {
            SharedContent.setModalMessage(error.message);
        })
    }

    $scope.changePassword = function (userPass) {
        userRequester.changeUserPassword(userPass).$promise.then(function (data) {
            SharedContent.setModalMessage(data.message);
        }, function (error) {
            SharedContent.setModalMessage(error.message);
        })
    }
});