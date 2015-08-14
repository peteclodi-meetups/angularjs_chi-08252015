'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:UserController
 * @description
 * # UserController
 * Controller of the demoApp
 */
angular.module('demoApp')
    .controller('UserController', ['$scope', '$routeParams', '$location', 'Users', function ($scope, $routeParams, $location, Users) {
        if(angular.isDefined($routeParams.id)) {
            $scope.user = Users.get({userId: $routeParams.id});
            $scope.isUpdate = true;
        }
        else {
            $scope.user = {
                isAwesome: true
            };
            $scope.isUpdate = false;
        }

        $scope.addUser = function() {
            if($scope.isUpdate) {
                $scope.user.$update({userId: $scope.user._id}, function(user) {
                    $location.url($scope.$root.routePaths.users);
                }, function() {
                    $scope.errorMessage = 'Unable to Update the User';
                });
            }
            else {
                Users.save($scope.user, function(user) {
                    $location.url($scope.$root.routePaths.users);
                }, function() {
                    $scope.errorMessage = 'Unable to Add the New User';
                });
            }
        };
    }]);
