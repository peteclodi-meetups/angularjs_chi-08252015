'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:UserController
 * @description
 * # UserController
 * Controller of the demoApp
 */
angular.module('demoApp')
    .controller('UserController', ['$rootScope', '$routeParams', '$location', 'Users', function ($rootScope, $routeParams, $location, Users) {
        if(angular.isDefined($routeParams.id)) {
            this.user = Users.get({userId: $routeParams.id});
            this.isUpdate = true;
        }
        else {
            this.user = {
                isAwesome: true
            };
            this.isUpdate = false;
        }

        this.submitUser = function() {
            var self = this;
            if(this.isUpdate) {
                return this.user.$update({userId: this.user._id}, function(user) {
                    $location.url($rootScope.routePaths.users);
                }, function() {
                    self.errorMessage = 'Unable to Update the User';
                }).$promise;
            }
            else {
                return Users.save(this.user, function(user) {
                    $location.url($rootScope.routePaths.users);
                }, function() {
                    self.errorMessage = 'Unable to Add the New User';
                }).$promise;
            }
        };
    }]);
