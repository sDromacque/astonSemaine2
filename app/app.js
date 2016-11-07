angular.module('app', []);

angular.module('app')
    .controller('main', function ($scope, $http) {
        $scope.sortType = 'name';
        $scope.sortReverse = false;

        $http.get('./data/users.json')
            .then(function (res) {
                $scope.users = res.data;
            });
        $scope.showData = true;
        }
    )
    .controller('menu', function ($scope) {
        $scope.menu = [
            {label: "Home", url: '/'},
            {label: "Products", url: '/products'},
            {label: "Contact", url: '/contact'}
        ];
    })
    .controller('table', function ($scope) {
        $scope.thead = ['name', 'age', 'address', 'gender'];
    })