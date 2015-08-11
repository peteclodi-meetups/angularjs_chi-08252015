'use strict';

/**
 * @ngdoc function
 * @name angular1xApp.service:UserCollection
 * @description
 * # User Collection Value
 * service of the angular1xApp
 */
angular.module('angular1xApp')
    .factory('UserCollection', [function() {
        return {
            _users: [],
            getUser: function(id) {
                var filteredUsers = this._users.filter(function(user) { return user.id === +id; });
                return filteredUsers.length > 0 ? filteredUsers[0] : undefined;
            },
            setUsers: function(users) {
                if(angular.isArray(users)) {
                    this._users = users;
                }
                else {
                    this._users = [];
                    this._users.push(users);
                }
                return this._users;
            },
            addUser: function(user) {
                if(angular.isObject(user)) {
                    this._users.push(user);
                }
                else {
                    throw new Error("Invalid Parameter, 'user' must be an object");
                }
                return this._users;
            }
        };
    }]);
