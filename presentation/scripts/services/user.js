'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.service:User
 * @description
 * # User Service
 * Service of the angular1xApp
 */
angular.module('angular1xApp')
    .factory('User', ['$resource', function ($resource) {
        return $resource('http://localhost:3000/users/:id', null, {update: {method: 'PUT'} });
    }]);
