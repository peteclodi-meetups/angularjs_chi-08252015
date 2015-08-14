'use strict';

/**
 * @ngdoc function
 * @name demoApp.module.config:HTML5Location
 * @description
 * # HTML5 Location Mode config block
 * config block of the demoApp
 */
angular.module('demoApp')
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('!').html5Mode(true);
    }]);