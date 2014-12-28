'user strict';

musicApp.controller("ArtistDetailsController",

    function ArtistDetailsController($scope, artistData) {


       $scope.artist =  artistData.getArtist(999);

        $scope.hideInformation = true;
        $scope.showInfoText = "Show";
        function ShowAdditionalInformation() {
            if ($scope.hideInformation == true) {
                $scope.hideInformation = false;
                $scope.showInfoText = "Hide";

            } else {
                $scope.hideInformation = true;
                $scope.showInfoText = "Show";
            }
        }

        $scope.ShowAdditionalInformation = ShowAdditionalInformation;


        $scope.ShowBandMembersState = true;
        $scope.ShowBandMembersStateText = "Show";
        function ShowBandMembers() {
            if ($scope.ShowBandMembersState == true) {
                $scope.ShowBandMembersState = false;
                $scope.ShowBandMembersStateText = "Hide";

            } else {
                $scope.ShowBandMembersState = true;
                $scope.ShowBandMembersStateText = "Show";
            }
        }

        $scope.ShowBandMembers = ShowBandMembers;
        $scope.grayBackgroundClass = "gray-background";


        $scope.ShowBandReckordsState = true;
        $scope.ShowBandReckordsBtnText = "Show";
        $scope.ShowBandRecords = ShowBandRecords;
        function ShowBandRecords() {
            if ($scope.ShowBandReckordsState) {
                $scope.ShowBandReckordsState = false;
                $scope.ShowBandReckordsBtnText = "Hide";
            } else {
                $scope.ShowBandReckordsState = true;
                $scope.ShowBandReckordsBtnText = "Show";
            }
        }



        function UpVoteRating(album){
            album.rating++;
        }
        function DownVoteRating(album){
           if(album.rating >0){
               album.rating--;
           }
        }
        $scope.UpVoteRating = UpVoteRating;
        $scope.DownVoteRating = DownVoteRating;
    }
);