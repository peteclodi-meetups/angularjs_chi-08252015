'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.controller:Slide8
 * @description
 * # Slide 8 Controller
 * Controller of the angular1xApp
 */
angular.module('angular1xApp')
    .controller('Slide8Controller', ['$scope', '$controller', function($scope, $controller) {
        $scope.maxPartialIndex = 4;
        $controller('PartialsSlideController', {$scope: $scope});

        $scope.controllerCode = "angular.module('demoApp').controller('TestController', ['$scope', function($scope) {\n" +
        "       $scope.users = [\n" +
        "           {id: 0, first_name: 'Patient', last_name: '0', email: 'p0@test.com', address: '123 Any Street', city: 'Springfield', state: 'IL', zip: '62703'},\n" +
        "           {id: 1, first_name: 'Patient', last_name: '1', email: 'p1@test.com', address: '123 Any Street', city: 'Springfield', state: 'MA', zip: '01101'},\n" +
        "           {id: 2, first_name: 'Patient', last_name: '2', email: 'p2@test.com', address: '123 Any Street', city: 'Springfield', state: 'OH', zip: '45501'},\n" +
        "           {id: 3, first_name: 'Patient', last_name: '3', email: 'p3@test.com', address: '123 Any Street', city: 'Springfield', state: 'SD', zip: '57062'}\n" +
        "       ];\n" +
        "       $scope.loadUser = function(user) {\n" +
        "           $scope.user = angular.copy(user);\n" +
        "       };\n" +
        "       $scope.cancel = function() {\n" +
        "           $scope.user = undefined;\n" +
        "       };\n" +
        "       $scope.updateUser = function() {\n" +
        "           $scope.users[$scope.user.id] = angular.copy($scope.user);\n" +
        "           $scope.cancel();\n" +
        "       };\n" +
        "       $scope.deleteUser = function() {\n" +
        "           $scope.users.splice($scope.user.id, 1);\n" +
        "           $scope.users.forEach(function(user, index) {\n" +
        "                user.id = index;\n" +
        "            });\n" +
        "           $scope.cancel();\n" +
        "       };\n" +
        "   }]);";

        $scope.templateCode = "<div>\n" +
        "   <div class='left'>\n" +
        "       <h2>Users</h2>\n" +
        "       <ul ng-if='users.length > 0'>\n" +
        "           <li ng-repeat='user in users track by user.id'>\n" +
        "               <a ng-click='loadUser(user)'>{{user.first_name}}&nbsp;{{user.last_name}}</a>\n" +
        "           </li>\n" +
        "       </ul>\n" +
        "       <div class='no-users' ng-if='users.length === 0'>No users</div>\n" +
        "   </div>\n" +
        "   <div class='right'>\n" +
        "       <form name='singlePageUser' ng-submit='updateUser()'>\n" +
        "           <div class='user-data'>\n" +
        "               <h3>Name</h3>\n" +
        "               <label>\n" +
        "                   <input ng-model='user.first_name'>\n" +
        "               </label>\n" +
        "               <label>\n" +
        "                   <input ng-model='user.last_name'>\n" +
        "               </label>\n" +
        "           </div>\n" +
        "           ...\n" +
        "           <button type='button' ng-click='cancel()' ng-disabled='!user'>Cancel</button>\n" +
        "           <button type='submit' ng-disabled='!user'>Update</button>\n" +
        "           <button type='button' ng-click='deleteUser()' ng-disabled='!user'>Delete</button>\n" +
        "       </form>\n" +
        "   </div>\n" +
        "</div>";
    }]);
