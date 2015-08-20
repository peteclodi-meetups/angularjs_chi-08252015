'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.config:HTML5Location
 * @description
 * # HTML5 Location Routing
 * Config block of the angular1xApp
 */
angular.module('angular1xApp')
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('!').html5Mode(true);
    }]);
