angular.module('app', ["ngRoute", 'chart.js', "leaflet-directive"]);

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
        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Registred'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
        $scope.options = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }
                ]
            }
        }
    })

    .controller('cartoCtrl', ['$scope', function($scope) {

        function getUser(user) {
            return user._id === '58209960c066406e99d9b9be';
        }
        $scope.user = $scope.users.find(getUser);

        // make map
        angular.extend($scope, {
            san_fran: {
                lat: $scope.user.latitude,
                lng: $scope.user.longitude,
                zoom: 13
            },
            events: {},
            layers: {
                baselayers: {
                    osm: {
                        name: 'OpenStreetMap',
                        url: 'https://{s}.tiles.mapbox.com/v3/examples.map-i875mjb7/{z}/{x}/{y}.png',
                        type: 'xyz'
                    }
                }
            },
            defaults: {
                scrollWheelZoom: false
            }
        })
        $scope.markers = new Array();
        $scope.$on("leafletDirectiveMap.click", function(event, args){
            var leafEvent = args.leafletEvent;
            $scope.markers.push({
                lat: leafEvent.latlng.lat,
                lng: leafEvent.latlng.lng,
                draggable: true
            });
        });

    }])

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