/**
 * Created by NIKOLAY on 12/27/2014.
 */
'use strict';
musicApp.controller('EditArtistController', function EditArtistController($scope) {
    $scope.saveArtist = function (artist,newArtistForm) {
        console.log(newArtistForm);
        if(newArtistForm.$valid){
            alert(artist.name + ' ' + artist.created); // TO DO Save
        }else{
            alert("Invalid Data");
        }
    }
    $scope.cancel  = function () {
        alert("To do Cancel");
    }
});