'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.service:Users
 * @description
 * # Users Service
 * Service of the angular1xApp
 */
angular.module('angular1xApp')
    .factory('Users', ['$http', 'User', 'UserCollection', function ($http, User, UserCollection) {
        var users = {};

        users.get = function() {
            return $http.get('http://localhost:3000/users', {
                method: 'GET',
                transformResponse: function(data) {
                    var resultsData = JSON.parse(data);
                    return UserCollection.setUsers(angular.isArray(resultsData) ? resultsData.map(function(datum) {
                        return new User(datum);
                    }) : resultsData);
                }
            });
        };

        return users;
    }]);
