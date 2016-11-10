angular.module('app')
    .controller('userCtrl', function ($scope, $routeParams) {
            function getUser(user) {
        return user._id === $routeParams.id;
    }
    $scope.user = $scope.users.find(getUser);
    })
    .controller('usersCtrl', function ($scope) {
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
    });
