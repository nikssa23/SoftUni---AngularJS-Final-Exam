adsApp.controller('LoginAndRegisterController', function LoginAndRegisterController($scope, adsComponents, SharedContent) {

    $scope.loadHeaderTeplate = adsComponents.checkUserLogin();
    $scope.userName = "";

    $scope.loginUser = function (user) {
        adsComponents.loginUser(user).then(function (data) {
            adsComponents.makeUserLogged(data.username,data.access_token);
            $scope.loadHeaderTeplate = true;
            $scope.userName = adsComponents.getUsername();

        });
    }

    $scope.registerUser = function (user) {
        adsComponents.registerUser(user).then(function (data) {
            adsComponents.loginUser(data.name, data.access_token);
            $scope.loadHeaderTeplate = true;
            $scope.userName = adsComponents.getUsername();
        });
    }

    $scope.logout = function () {
        adsComponents.userLogout();
        $scope.loadHeaderTeplate = false;
        $scope.userName = '';

    }
});