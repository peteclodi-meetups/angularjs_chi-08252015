'use strict';

/**
 * @ngdoc function
 * @name demoApp.directive:SearchInput
 * @description
 * # SearchInput Directive
 * Directive of the demoApp
 */
angular.module('demoApp')
    .directive('header', [function () {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'views/directives/header.html',
            transclude: true
        };
    }]);
