adsApp.controller('LoginController', function LoginController($scope, adsComponents, SharedContent) {

    $scope.template = {};
    $scope.template.headerTemplate = "/templates/header/guest.html";


    $scope.loginUser = function (user) {
        adsComponents.loginUser(user).then(function (data) {
//
            SharedContent.setUserHeader();

        });
    }




    $scope.chview = function(){
//        SharedContent.setUserHeader();
 //       $scope.template = {};
        $scope.template.headerTemplate = "/templates/header/user.html";
        console.log($scope.template.headerTemplate);
    }
});