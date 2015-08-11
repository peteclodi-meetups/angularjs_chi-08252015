'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide10
 * @description
 * # Slide 10 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide10Controller', ['$scope', '$controller', function($scope, $controller) {
        $scope.maxPartialIndex = 4;
        $controller('PartialsSlideController', {$scope: $scope});

        $scope.serviceCode = "angular.module('demoApp').factory('UserCollection', [function() {\n" +
        "   return {\n" +
        "       _users: [],\n" +
        "       getUser: function(id) {\n" +
        "           var filteredUsers = this._users.filter(function(user) { return user.id === +id; });\n" +
        "           return filteredUsers.length > 0 ? filteredUsers[0] : undefined;\n" +
        "       },\n" +
        "       setUsers: function(users) {\n" +
        "           if(angular.isArray(users)) {\n" +
        "               this._users = users;\n" +
        "           }\n" +
        "           else {\n" +
        "               this._users = [];\n" +
        "               this._users.push(users);\n" +
        "           }\n" +
        "           return this._users;\n" +
        "       },\n" +
        "       addUser: function(user) {\n" +
        "           if(angular.isObject(user)) {\n" +
        "               this._users.push(user);\n" +
        "           }\n" +
        "           else {\n" +
        "               throw new Error(\"Invalid Parameter, 'user' must be an object\");\n" +
        "           }\n" +
        "           return this._users;\n" +
        "       }\n" +
        "   };\n" +
        "}]);";

        $scope.providerCode = "$routeProvider\n" +
        "   .when('/', {\n" +
        "       templateUrl: 'views/main.html',\n" +
        "       controller: 'MainController'\n" +
        "   })\n" +
        "   .otherwise({\n" +
        "       redirectTo: '/'\n" +
        "   });";
    }]);
