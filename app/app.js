angular.module('app', ["ngRoute"]);

angular.module('app')
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "app/views/main.html",
                controller: 'homeCtrl'
            })
            .when("/products", {
                templateUrl : "app/views/products.html"
            });
    })

    .controller('main', function ($scope) {

    })

    .controller('menuController', function ($scope) {
        $scope.menu = [
            {label: "Home", url: '#/'},
            {label: "Products", url: '#/products'},
            {label: "Contact", url: '#/contact'}
        ];
    })
    .controller('homeCtrl', function ($scope) {
        $scope.toto = "welcome";
    })
    .controller('productCtrl', function ($scope, $http) {
        $scope.sortType = 'name';
        $scope.sortReverse = false;

        $http.get('./data/users.json')
            .then(function (res) {
                $scope.users = res.data;
            });
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