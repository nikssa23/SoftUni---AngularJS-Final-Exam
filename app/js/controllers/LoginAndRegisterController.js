adsApp.controller('LoginAndRegisterController', function LoginAndRegisterController($scope, userRequester, SharedContent, $location) {

    $scope.loadHeaderTeplate = userRequester.checkUserLogin();
    $scope.userName = "";

    if(userRequester.checkUserLogin()){
        $location.path('/home');
    }

    if (userRequester.checkUserLogin()) {
        userRequester.getUserProfile().$promise.then(function (data) {
            $scope.user = data;
        }, function (error) {
            SharedContent.setModalMessage(error.message);
        })
    }

    $scope.loginUser = function (user) {
        userRequester.loginUser(user).then(function (data) {
            userRequester.makeUserLogged(data.username, data.access_token);
            $scope.loadHeaderTeplate = true;
            $scope.userName = userRequester.getUsername();
            $location.path("/ads");
        }, function (error) {
            SharedContent.setModalMessage(error.error_description);
        });
    }

    $scope.registerUser = function (user) {
        userRequester.registerUser(user).then(function (data) {
            userRequester.makeUserLogged(data.username, data.access_token);
            $scope.loadHeaderTeplate = userRequester.checkUserLogin();
            $scope.userName = userRequester.getUsername();
            SharedContent.setModalMessage('Successful registration');
            $location.path("/ads");
        }, function (error) {
            SharedContent.setModalMessage(error.message);
        });
    }

    $scope.logout = function () {
        userRequester.userLogout();
        $scope.loadHeaderTeplate = false;
        $scope.userName = '';

    }

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