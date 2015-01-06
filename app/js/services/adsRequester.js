adsApp.service('adsRequester', function adsRequester($resource,$http,baseUrl,userRequester) {

    var allAdsList = $resource(baseUrl + 'ads?pagesize=10&startpage=1');
    var userAds = $resource(baseUrl + 'user/ads', {
        title: '@title',
        text: '@text',
        categoryid: '@categoryid',
        townid: '@townid',
        ImageDataURL: '@ImageDataURL'
    });

    function setHeaders() {
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + userRequester.getToken();
    }

    function getAdsList() {
        return allAdsList.get();
    }

    function publishNewAd(ad) {
        setHeaders();
        return userAds.save(ad)
    }

    function getMyAds(){
        setHeaders();
        return userAds.get();
    }
    return {
        publishNewAd: publishNewAd,
        getAdsList: getAdsList,
        getMyAds:getMyAds
    }
})