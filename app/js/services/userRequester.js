adsApp.service('userRequester', function userRequester($resource,baseUrl) {

    function makeUserLogged(name, token) {
        localStorage.setItem('username', name);
        localStorage.setItem('token', token);
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

    return {
        makeUserLogged: makeUserLogged,
        registerUser: registerUser,
        getToken: getToken,
        getUsername: getUsername,
        checkUserLogin: checkUserLogin,
        loginUser: loginUser,
        userLogout: userLogout
    }
})