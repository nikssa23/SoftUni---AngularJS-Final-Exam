'use strict';

adsApp.filter('status', function () {
    return function(input){
        switch (input){
            case 'Inactive': return "Inactive ";break;
            case 'WaitingApproval': return "Waiting Approval ";break;
            case 'Published': return "Published";break;
        }
    }
})