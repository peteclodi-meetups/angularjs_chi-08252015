'use strict';

describe('Service: UserDeletionProcessor', function () {

    // load the directives's module
    beforeEach(module('demoApp'));

    var $httpBackend;
    var $http;
    var Users;
    var UserDeletionProcessor;
    var localUsers;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$httpBackend_, _$http_, _Users_, _UserDeletionProcessor_) {
        $httpBackend = _$httpBackend_;
        $http = _$http_;
        Users = _Users_;
        UserDeletionProcessor = _UserDeletionProcessor_;
        localUsers = angular.copy(users);
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('> Verify only users where "selected === true" are returned', function() {
        localUsers.forEach(function(user, index) {
            user.selected = index % 2;
        });
        var selectedUsers = UserDeletionProcessor.getUsersMarkedForDeletion(localUsers);
        expect(selectedUsers.length).toEqual(Math.floor(localUsers.length / 2));
        expect(selectedUsers.every(function(user) { return user.selected; })).toBeTruthy();
    });

    it('> Verify that delete processing is running correctly', function() {
        $httpBackend.whenGET('http://0.0.0.0:4000/users')
            .respond(function() {
                return [200, users, {}];
            });

        localUsers = Users.query(function() {
            localUsers.forEach(function(user, index) {
                user.selected = index % 2;
            });

            var selectedUsers = UserDeletionProcessor.getUsersMarkedForDeletion(localUsers);
            selectedUsers.forEach(function(user) {
                $httpBackend.whenDELETE('http://0.0.0.0:4000/users/' + user._id)
                    .respond(function() {
                        return [ 200, user, {} ];
                    });
            });

            UserDeletionProcessor.deleteUsers(selectedUsers).then(function() {
                expect(true).toBeTruthy();
            });
        });
        $httpBackend.flush();
    });
});
