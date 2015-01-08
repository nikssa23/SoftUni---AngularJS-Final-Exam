adsApp.controller('LoginAndRegisterController', function LoginAndRegisterController($scope, userRequester, SharedContent) {

    $scope.loadHeaderTeplate = userRequester.checkUserLogin();
    $scope.userName = "";

    $scope.loginUser = function (user) {
        userRequester.loginUser(user).then(function (data) {
            userRequester.makeUserLogged(data.username,data.access_token);
            $scope.loadHeaderTeplate = true;
            $scope.userName = userRequester.getUsername();

        });
    }

    $scope.registerUser = function (user) {
        userRequester.registerUser(user).then(function (data) {
            userRequester.makeUserLogged(data.username,data.access_token);
            $scope.loadHeaderTeplate = userRequester.checkUserLogin();
            $scope.userName = userRequester.getUsername();
        }, function (error) {
            SharedContent.setModalMessage(error.message);
        });
    }

    $scope.logout = function () {
        userRequester.userLogout();
        $scope.loadHeaderTeplate = false;
        $scope.userName = '';

    }
});