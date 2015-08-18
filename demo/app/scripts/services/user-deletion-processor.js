'use strict';

/**
 * @ngdoc function
 * @name demoApp.service.UserDeletionProcessor
 * @description
 * # UserDeletionProcessor
 * Service of the demoApp
 */
angular.module('demoApp')
    .factory('UserDeletionProcessor', ['$q', function ($q) {
        var userDeletionProcessor = {};
        var deletedUsers = {
            isFullyCompleted: function() {
                var isFullyCompleted = undefined;
                angular.forEach(this, function(value) {
                    if(!angular.isFunction(value)) {
                        isFullyCompleted = isFullyCompleted ? isFullyCompleted && value : value;
                    }
                });
                return isFullyCompleted;
            }
        };

        userDeletionProcessor.getUsersMarkedForDeletion = function(users) {
            if(angular.isArray(users)) {
                return users.filter(function(user) { return user.selected; });
            }
            return [];
        };

        userDeletionProcessor.deleteUsers = function(users) {
            var deferred = $q.defer();

            if(angular.isArray(users)) {
                users.forEach(function(user) {
                    deletedUsers[user._id] = false;
                    user.$delete({userId: user._id}, function() {
                        deletedUsers[user._id] = true;
                        if(deletedUsers.isFullyCompleted()) {
                            deferred.resolve();
                        }
                    }, function() {
                        deletedUsers[user._id] = true;
                        if(deletedUsers.isFullyCompleted()) {
                            deferred.reject();
                        }
                    });
                });
            }
            else {
                deferred.reject();
            }
            return deferred.promise;
        };

        return userDeletionProcessor;
    }]);
