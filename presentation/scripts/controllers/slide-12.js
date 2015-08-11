'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide12
 * @description
 * # Slide 12 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide12Controller', ['$scope', '$controller', function($scope, $controller) {
        $scope.maxPartialIndex = 4;
        $controller('PartialsSlideController', {$scope: $scope});

        $scope.httpCode = "angular.module('demoApp').factory('Users',\n" +
        "   ['$http', 'User', 'UserCollection', function ($http, User, UserCollection) {\n" +
        "       var users = {};\n" +
        "       users.get = function() {\n" +
        "           return $http.get('http://localhost:3000/users', {\n" +
        "               method: 'GET',\n" +
        "               transformResponse: function(data) {\n" +
        "                   var resultsData = JSON.parse(data);\n" +
        "                       return UserCollection.setUsers(angular.isArray(resultsData) ?\n" +
        "                           resultsData.map(function(datum) {\n" +
        "                               return new User(datum);\n" +
        "                           }) : resultsData);\n" +
        "                   }\n" +
        "               });\n" +
        "       };\n" +
        "       return users;\n" +
        "   }]);";

        $scope.resourceCode = "angular.module('angular1xApp').factory('User', ['$resource', function ($resource) {\n" +
        "       return $resource('http://localhost:3000/users/:id', null,\n" +
        "                        { update: {method: 'PUT'} });\n" +
        "}]);";
    }]);
