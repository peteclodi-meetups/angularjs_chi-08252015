'use strict';

/**
 * @ngdoc overview
 * @name demoApp.module.config:Routing
 * @description
 * # Routing config block
 * config block of the demoApp
 */
angular.module('demoApp')
    .config(['$routeProvider', 'RoutePaths', function ($routeProvider, RoutePaths) {
        $routeProvider
            .when(RoutePaths.users, {
                templateUrl: 'views/users.html',
                controller: 'UsersController'
            })
            .when(RoutePaths.user + '/:id?', {
                templateUrl: 'views/user.html',
                controller: 'UserController'
            })
            .otherwise({
                redirectTo: RoutePaths.users
            });
    }]);