'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide9
 * @description
 * # Slide 9 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide9Controller', ['$scope', function($scope) {
        $scope.users = [
            {id: 0, first_name: 'Patient', last_name: '0', email: 'p0@test.com', address: '410 E. Jackson Street', city: 'Springfield', state: 'IL', zip: '62703'},
            {id: 1, first_name: 'Patient', last_name: '1', email: 'p1@test.com', address: '123 Any Street', city: 'Springfield', state: 'MA', zip: '01101'},
            {id: 2, first_name: 'Patient', last_name: '2', email: 'p2@test.com', address: '123 Any Street', city: 'Springfield', state: 'OH', zip: '45501'},
            {id: 3, first_name: 'Patient', last_name: '3', email: 'p3@test.com', address: '123 Any Street', city: 'Springfield', state: 'SD', zip: '57062'}
        ];

        $scope.loadUser = function(user) {
            $scope.user = angular.copy(user);
        };

        $scope.cancel = function() {
            $scope.user = undefined;
        };

        $scope.updateUser = function() {
            $scope.users[$scope.user.id] = angular.copy($scope.user);
            $scope.cancel();
        };

        $scope.deleteUser = function() {
            $scope.users.splice($scope.user.id, 1);
            $scope.users.forEach(function(user, index) {
                user.id = index;
            });
            $scope.cancel();
        };
    }]);
