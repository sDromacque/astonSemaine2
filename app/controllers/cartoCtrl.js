angular.module('app')
    .controller('cartoCtrl', ['$scope', function($scope) {
        angular.extend($scope, {
            city: {
                lat: $scope.user.latitude,
                lng: $scope.user.longitude,
                zoom: 13
            },
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
                scrollWheelZoom: true
            },
            markers: {
                osloMarker: {
                    lat: $scope.user.latitude,
                    lng: $scope.user.longitude,
                    message: $scope.user.name,
                    focus: true
                }
            }
        });
    }]);