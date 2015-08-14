'use strict';

/**
 * @ngdoc function
 * @name demoApp.module.run:ActiveRoute
 * @description
 * Store the active route for use in the Header directive links
 * run block of the demoApp
 */
angular.module('demoApp')
    .run(['$rootScope', function ($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function(event, currentRoute, previousRoute) {
            $rootScope.activeRoute = currentRoute.$$route.originalPath.split('/:')[0];
        });
    }]);
