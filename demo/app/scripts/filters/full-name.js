'use strict';

/**
 * @ngdoc function
 * @name demoApp.filter.FullName
 * @description
 * # Extract the Full Name from the User
 * filter of the demoApp
 */
angular.module('demoApp')
    .filter('FullName', [function () {
        return function(user) {
            return (user.firstName || 'John') + " " + (user.lastName || 'Doe');
        }
    }]);
