'use strict';

/**
 * @ngdoc function
 * @name demoApp.service.Users
 * @description
 * # Users
 * Service of the demoApp
 */
angular.module('demoApp')
    .factory('Users', ['$resource', function ($resource) {
        return $resource('http://0.0.0.0:4000/users/:userId', { userId: '@userId' }, { update: { method: 'PUT' } });
    }]);
