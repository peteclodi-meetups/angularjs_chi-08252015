'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:UsersController
 * @description
 * # UsersController
 * Controller of the demoApp
 */
angular.module('demoApp')
    .controller('UsersController', ['$scope', '$location', 'Users', function ($scope, $location, Users) {
        function updateAllUsersSelectionState() {
            $scope.users.forEach(function(user) {
                user.selected = $scope.selectAll;
            });
        }

        $scope.users = Users.query();
        $scope.selectAll = false;

        $scope.toggleSelectAll = function() {
            updateAllUsersSelectionState();
        };

        $scope.toggleUserSelection = function() {
            $scope.selectAll = $scope.users.every(function(user) { return user.selected; });
        };

        $scope.editUser = function(user) {
            $location.url($scope.$root.routePaths.user + '/' + user._id);
        };
    }]);
