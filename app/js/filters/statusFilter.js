'use strict';

musicApp.filter('status', function () {
    return function(input){
        switch (input){
            case 1: return "Sold Out";break;
            case 2: return "Released";break;
            case 3: return "Unreleased";break;
        }
    }
})