'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide13
 * @description
 * # Slide 13 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide13Controller', ['$scope', 'Users', 'User', function($scope, Users, User) {
        $scope.log = '';

        function refreshUsers() {
            Users.get().success(function(users) {
                $scope.users = users;
                $scope.error = undefined;
                $scope.log += "Users retrieved from server\n";
                $scope.log += angular.toJson($scope.users.map(function(user) { return {id: user.id, name: user.first_name + ' ' + user.last_name}})) + "\n";
            }).error(function() {
                $scope.log += "Failed to retrieve Users from server\n";
                $scope.error = 'Unable to get the Users';
            });
        }

        $scope.loadUser = function(user) {
            $scope.user = angular.copy(user);
        };

        $scope.cancel = function() {
            $scope.user = undefined;
        };

        $scope.updateUser = function() {
            User.update({id: $scope.user.id}, $scope.user, function() {
                $scope.log += "Updated User on server: " + angular.toJson({id: $scope.user.id, name: $scope.user.first_name + ' ' + $scope.user.last_name}) + "\n";
                $scope.cancel();
                refreshUsers();
            });
        };

        $scope.deleteUser = function() {
            $scope.user.$delete({id: $scope.user.id}, function() {
                $scope.log += "Deleted User on server: " + angular.toJson({id: $scope.user.id, name: $scope.user.first_name + ' ' + $scope.user.last_name}) + "\n";
                $scope.cancel();
                refreshUsers();
            });
        };

        refreshUsers();

        $scope.serviceTestCode = "function refreshUsers() {\n" +
        "   Users.get().success(function(users) {\n" +
        "       $scope.users = users;\n" +
        "       $scope.error = undefined;\n" +
        "   }).error(function() {\n" +
        "       $scope.error = 'Unable to get the Users';\n" +
        "   });\n" +
        "}\n" +
        "$scope.updateUser = function() {\n" +
        "   User.update({id: $scope.user.id}, $scope.user,\n" +
        "    function(){$scope.cancel(); refreshUsers();});\n" +
        "};\n" +
        "$scope.deleteUser = function() {\n" +
        "   $scope.user.$delete({id: $scope.user.id},\n" +
        "    function(){$scope.cancel(); refreshUsers();});\n" +
        "};\n";
    }]);
