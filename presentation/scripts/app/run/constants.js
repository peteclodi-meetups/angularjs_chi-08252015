'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestApp.run:Constants
 * @description
 * # Constants used throughout the App
 * Run block of the angularUnitTestApp
 */
angular.module('angularUnitTestApp')
    .run(['$rootScope', 'Events', function ($rootScope, Events) {
        $rootScope.events = Events;
    }]);
