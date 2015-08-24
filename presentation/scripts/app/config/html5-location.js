'use strict';

/**
 * @ngdoc function
 * @name angularUnitTestApp.config:HTML5Location
 * @description
 * # HTML5 Location Routing
 * Config block of the angularUnitTestApp
 */
angular.module('angularUnitTestApp')
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('!').html5Mode(true);
    }]);
