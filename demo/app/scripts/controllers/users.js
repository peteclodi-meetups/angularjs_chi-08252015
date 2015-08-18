'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:UsersController
 * @description
 * # UsersController
 * Controller of the demoApp
 */
angular.module('demoApp')
    .controller('UsersController', ['$scope', '$location', '$q', 'UserDeletionProcessor', 'Users',
        function ($scope, $location, $q, UserDeletionProcessor, Users) {
            function updateAllUsersSelectionState() {
                $scope.users.forEach(function(user) {
                    user.selected = $scope.selectAll;
                });
            }
            function updateAnyUsersSelectionState() {
                $scope.anySelected = $scope.selectAll || $scope.users.some(function(user) { return user.selected; });
            }

            function retrieveUsers() {
                $scope.users = Users.query();
            }

            retrieveUsers();
            $scope.selectAll = false;
            $scope.anySelected = false;

            $scope.toggleSelectAll = function() {
                updateAllUsersSelectionState();
                updateAnyUsersSelectionState();
            };

            $scope.userSelectionToggled = function() {
                $scope.selectAll = $scope.users.every(function(user) { return user.selected; });
                updateAnyUsersSelectionState();
            };

            $scope.editUser = function(user) {
                $location.url($scope.$root.routePaths.user + '/' + user._id);
            };

            $scope.deleteSelectedUsers = function() {
                var usersToDelete = UserDeletionProcessor.getUsersMarkedForDeletion($scope.users);
                return UserDeletionProcessor.deleteUsers(usersToDelete).then(retrieveUsers, retrieveUsers);
            };
        }
    ]);
