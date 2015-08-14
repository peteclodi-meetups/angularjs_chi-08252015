'use strict';

/**
 * @ngdoc function
 * @name demoApp.module.run:Constants
 * @description
 * Attach all of the frequently used constants to the $rootScope run block
 * run block of the demoApp
 */
angular.module('demoApp')
    .run(['$rootScope', 'RoutePaths', function ($rootScope, RoutePaths) {
        $rootScope.booleanValues = {true: true, false: false};
        $rootScope.routePaths = RoutePaths;
    }]);
