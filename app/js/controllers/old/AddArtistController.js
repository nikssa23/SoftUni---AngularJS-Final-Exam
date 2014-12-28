/**
 * Created by NIKOLAY on 12/27/2014.
 */
'use strict';
musicApp.controller('AddArtistController', function AddArtistController($scope,artistData) {
    $scope.saveArtist = function (artist,newArtistForm) {
      //  console.log(newArtistForm);
        if(newArtistForm.$valid){
            artistData.saveArtist(artist);
            //alert(artist.name + ' ' + artist.created); // TO DO Save
        }else{
            alert("Invalid Data");
        }
    }
    $scope.cancel  = function () {
        alert("To do Cancel");
    }
});