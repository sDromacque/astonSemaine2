angular.module('app')
    .controller('main', function ($scope, $http) {
        $http.get('./data/users.json')
            .then(function (res) {
                $scope.users = res.data;
            });
    });