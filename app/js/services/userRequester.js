adsApp.service('userRequester', function userRequester($resource, $http, $q, baseUrl) {


    var userProfile = $resource(baseUrl + 'user/profile', {
        name: '@name',
        email: '@email',
        phonenumber: '@phonenumber',
        townid: '@townid'
    }, {
        update: {
            method: 'PUT'
        }
    });

    var userPassword = $resource(baseUrl + 'user/changepassword', {
        oldPassword: '@oldPassword',
        newPassword: '@newPassword',
        confirmPassword: '@confirmPassword'
    }, {
        update: {
            method: 'PUT'
        }
    });

    function makeUserLogged(name, token) {
        localStorage.setItem('username', name);
        localStorage.setItem('token', token);
    }

    function setHeaders() {
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    }

    function registerUser(user) {
        var defer = $q.defer();
        $http.post(baseUrl + 'user/register',
            {
                username: user.username,
                password: user.password,
                confirmPassword: user.confirmPassword,
                name: user.name,
                email: user.email,
                phone: user.phone,
                townId: user.townId
            }
        ).success(function (data, status, headers, config) {
                defer.resolve(data);
            })
            .error(function (data, status, headers, config) {
                defer.reject(data);
            });

        return defer.promise;
    }

    function getToken() {
        return localStorage.getItem('token');
    }

    function getUsername() {
        return localStorage.getItem('username');
    }

    function checkUserLogin() {
        var token = localStorage.getItem('token');
        if (token != null || token != undefined) {
            return true;
        }
        return false;
    }

    function loginUser(user) {
        var defer = $q.defer();
        $http.post(baseUrl + 'user/login',
            {
                username: user.username,
                password: user.password
            }
        ).success(function (data, status, headers, config) {
                defer.resolve(data);
            })
            .error(function (data, status, headers, config) {
                defer.reject(data);
            });

        return defer.promise;
    }

    function userLogout() {
        localStorage.removeItem('name');
        localStorage.removeItem('token');
    }

    function getUserProfile() {
        setHeaders();
        return userProfile.get();
    }

    function updateUserProfile(user) {
        return userProfile.update(user);
    }

    function changeUserPassword(user) {
        return userPassword.update(user);
    }

    return {
        makeUserLogged: makeUserLogged,
        registerUser: registerUser,
        getToken: getToken,
        getUsername: getUsername,
        checkUserLogin: checkUserLogin,
        loginUser: loginUser,
        userLogout: userLogout,
        getUserProfile: getUserProfile,
        updateUserProfile: updateUserProfile,
        changeUserPassword:changeUserPassword
    }
})