angular.module('app', ["ngRoute"]);

angular.module('app')
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "app/views/main.html",
                controller: 'homeCtrl'
            })
            .when("/users", {
                templateUrl : "app/views/users.html"
            })
            .when('/user/:id', {
                templateUrl : "app/views/user.html",
                controller: 'userCtrl'
            })
    })

    .controller('main', function ($scope, $http) {
        $http.get('./data/users.json')
            .then(function (res) {
                $scope.users = res.data;
            });
    })

    .controller('menuController', function ($scope) {
        $scope.menu = [
            {label: "Home", url: '#/'},
            {label: "Users", url: '#/users'},
            {label: "Contact", url: '#/contact'}
        ];
    })
    .controller('homeCtrl', function ($scope) {
        $scope.toto = "welcome";

    })
    .controller('productCtrl', function ($scope) {
        $scope.sortType = 'name';
        $scope.sortReverse = false;

        $scope.showData = true;

        $scope.thead = ['name', 'age', 'address', 'gender'];

        $scope.addUser = function () {
            $scope.users.push({
                'name': $scope.name,
                'age': $scope.age,
                'address': $scope.address,
                'gender': $scope.gender
            });
            $scope.name = '';
            $scope.age = '';
            $scope.address = '';
            $scope.gender = '';
        }
    })
    .controller('userCtrl', function ($scope) {
        function getUser(fruit) {
            return fruit._id === '5820996097a10e27671a23a5';
        }
        $scope.user = $scope.users.find(getUser);
    });