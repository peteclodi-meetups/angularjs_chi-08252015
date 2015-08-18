'use strict';

describe('Controller: UsersController', function () {

    // load the controller's module
    beforeEach(module('demoApp'));

    var $controller;
    var $scope;
    var $location;
    var $httpBackend;

    function createController(scope) {
        return $controller('UsersController', {$scope: scope});
    }

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$controller_, _$rootScope_, _$location_, _$httpBackend_, _RoutePaths_) {
        $controller = _$controller_;

        angular.extend(_$rootScope_, {routePaths: _RoutePaths_});

        $scope = _$rootScope_.$new();
        $location = _$location_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('> Verify that users are retrieved properly', function() {
        $httpBackend.whenGET('http://0.0.0.0:4000/users')
            .respond(function() {
                return [ 200, users, {} ];
            }
        );

        createController($scope);
        $scope.users.$promise.then(function() {
                expect($scope.users.length).toEqual(users.length);
            }
        );
        $httpBackend.flush();
    });

    it('> Verify that users are Deleted properly', function() {
        var firstGETCall = true;
        $httpBackend.whenGET('http://0.0.0.0:4000/users')
            .respond(function() {
                if(firstGETCall) {
                    firstGETCall = false;
                    return [
                        200,
                        [{
                            _id: "55d21f29437bed5b216acbcb",
                            isAwesome: true,
                            firstName: "Pete",
                            lastName: "Clodi"
                        }, {
                            _id: "55d21f33437bed5b216acbcc",
                            isAwesome: true,
                            firstName: "Roseann",
                            lastName: "Clodi"
                        }],
                        {}
                    ];
                }
                else {
                    return [
                        200,
                        [{
                            _id: "55d21f33437bed5b216acbcc",
                            isAwesome: true,
                            firstName: "Roseann",
                            lastName: "Clodi"
                        }],
                        {}
                    ];
                }
            });

        $httpBackend.whenDELETE('http://0.0.0.0:4000/users/55d21f29437bed5b216acbcb')
            .respond(function() {
                return [
                    200,
                    {
                        _id: "55d21f29437bed5b216acbcb",
                        isAwesome: true,
                        firstName: "Pete",
                        lastName: "Clodi"
                    },
                    {}
                ];
            });

        createController($scope);
        $scope.users.$promise.then(function() {
                var users = $scope.users.filter(function(user) { return user._id === '55d21f29437bed5b216acbcb'; });
                if(users.length > 0 && users.length === 1) {
                    // Initialize the selected value since there is no UI to do this for us
                    users[0].selected = true;
                    $scope.deleteSelectedUsers().then(function() {
                        $scope.users.$promise.then(function() {
                                expect($scope.users.length).toEqual(1);
                            }
                        );
                    });
                }
            }
        );
        $httpBackend.flush();
    });

    describe('> User Selection testing', function() {
        beforeEach(function() {
            $httpBackend.whenGET('http://0.0.0.0:4000/users')
                .respond(function() {
                    return [ 200, users, {} ];
                }
            );
        });

        it('> Verify initial selection state of all users', function() {
            createController($scope);
            $scope.users.$promise.then(
                function() {
                    expect($scope.selectAll).toBeFalsy();
                    expect($scope.anySelected).toBeFalsy();
                    $scope.users.forEach(function(user) {
                        expect(user.selected).toBeFalsy();
                    });
                }
            );
            $httpBackend.flush();
        });

        it('> Verify selecting all users', function() {
            createController($scope);
            $scope.users.$promise.then(
                function() {
                    $scope.selectAll = true;
                    $scope.toggleSelectAll();

                    expect($scope.selectAll).toBeTruthy();
                    $scope.users.forEach(function(user) {
                        expect(user.selected).toBeTruthy();
                    });
                }
            );
            $httpBackend.flush();
        });

        it('> Verify selecting 1 user', function() {
            createController($scope);
            $scope.users.$promise.then(
                function() {
                    // Mimic the ng-model data binding to the user's selected property being updated through a click
                    $scope.users[0].selected = true;
                    $scope.userSelectionToggled();

                    expect($scope.selectAll).toBeFalsy();
                    expect($scope.anySelected).toBeTruthy();
                }
            );
            $httpBackend.flush();
        });
    });

    it('> Verify that the User Editing page is loaded properly', function() {
        $httpBackend.whenGET('http://0.0.0.0:4000/users')
            .respond(function() {
                return [200, users, {}];
            });

        // Seed the $location service's URL
        $location.url($scope.$root.routePaths.users);
        createController($scope);
        $scope.editUser(users[0]);
        expect($location.url()).toMatch($scope.$root.routePaths.user + '/' + users[0]._id);
        $httpBackend.flush();
    });
});
