'use strict';

describe('Controller: UserController', function () {

    // load the controller's module
    beforeEach(module('demoApp'));

    var $controller;
    var $rootScope;
    var $routeParams;
    var $location;
    var $httpBackend;

    function createController(routeParams) {
        return $controller('UserController', {$routeParams: routeParams});
    }

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$controller_, _$rootScope_, _$routeParams_, _$location_, _$httpBackend_, _RoutePaths_) {
        $controller = _$controller_;

        angular.extend(_$rootScope_, {routePaths: _RoutePaths_});
        $rootScope = _$rootScope_;

        $routeParams = _$routeParams_;
        $location = _$location_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('> Verify that user is retrieved properly', function() {
        $httpBackend.whenGET('http://0.0.0.0:4000/users/55d21f29437bed5b216acbcb')
            .respond(function() {
                return [ 200, users[0], {} ];
            }
        );

        $routeParams.id = '55d21f29437bed5b216acbcb';
        var controller = createController($routeParams);
        controller.user.$promise.then(function() {
                expect(controller.isUpdate).toBeTruthy();
                expect(controller.user._id).toEqual('55d21f29437bed5b216acbcb');
            }
        );
        $httpBackend.flush();
    });

    it('> Verify that user is added properly', function() {
        $httpBackend.whenPOST('http://0.0.0.0:4000/users', {
            isAwesome: true,
            firstName: 'Pete',
            lastName: 'Clodi'
        }).respond(function() {
                return [ 200, users[0], {} ];
            }
        );

        var controller = createController($routeParams);
        expect(controller.user).toBeDefined();
        expect(controller.user.isAwesome).toBeTruthy();

        // Populate the user object for saving/POSTing
        angular.extend(controller.user, {firstName: 'Pete', lastName: 'Clodi'});
        controller.submitUser().then(function() {
            expect($location.url()).toEqual($rootScope.routePaths.users);
        });
        $httpBackend.flush();
    });
});
