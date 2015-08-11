'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide11
 * @description
 * # Slide 11 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide11Controller', ['$scope', 'UserCollection', function($scope, UserCollection) {
        $scope.user = undefined;
        $scope.users = [];
        $scope.log = '';
        $scope.getUser = function(id) {
            $scope.user = angular.copy(UserCollection.getUser(id));
            $scope.log += 'Get User with id: ' + id + ' from the UserCollection service\n' + angular.toJson($scope.user) + '\n';
        };
        $scope.addUser = function() {
            $scope.users = UserCollection.addUser({ id: +$scope.user.id, name: $scope.user.name });
            $scope.log += 'Added User: ' + angular.toJson($scope.user) + ' to the UserCollection service\n';
            $scope.user = undefined;
            $scope.log += 'Users: ' + angular.toJson($scope.users) + '\n\n';
        };

        $scope.serviceTestCode = "angular.module('demoApp')\n" +
        "   .controller('TestController',\n" +
        "       ['$scope', 'UserCollection',\n" +
        "       function($scope, UserCollection) {\n" +
        "           $scope.user = undefined;\n" +
        "           $scope.users = [];\n" +
        "           $scope.getUser = function(id) {\n" +
        "               $scope.user = angular.copy(\n" +
        "                   UserCollection.getUser(id));\n" +
        "           };\n" +
        "           $scope.addUser = function() {\n" +
        "               $scope.users = UserCollection\n" +
        "                   .addUser({\n" +
        "                       id: +$scope.user.id,\n" +
        "                       name: $scope.user.name\n" +
        "                   });\n" +
        "               $scope.user = undefined;\n" +
        "           };\n" +
        "       }]);"
    }]);
