'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.run:Constants
 * @description
 * # Constants used throughout the App
 * Run block of the angular1xApp
 */
angular.module('angular1xApp')
    .run(['$rootScope', 'Events', function ($rootScope, Events) {
        $rootScope.events = Events;
    }]);
