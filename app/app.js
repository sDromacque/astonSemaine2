angular.module('app', ["ngRoute", 'chart.js', "leaflet-directive"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "app/views/main.html",
                controller: 'homeCtrl'
            })
            .when("/users", {
                templateUrl : "app/views/users.html",
                controller: 'userCtrl'
            })
            .when('/user/:id', {
                templateUrl : "app/views/user.html",
                controller: 'userCtrl'
            })
    })