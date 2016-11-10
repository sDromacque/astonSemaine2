angular.module('app')
    .controller('menuController', function ($scope) {
        $scope.menu = [
            {label: "Home", url: '#/'},
            {label: "Users", url: '#/users'},
            {label: "Contact", url: '#/contact'}
        ];
    });