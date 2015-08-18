var UsersPage = require('../pages/users');
var UserPage = require('../pages/user');
var UserRow = require('../controls/user-row');

describe('Edit a User', function() {
    var usersPage = new UsersPage();

    beforeEach(function() {
        usersPage.get();
    });

    describe('> Validate Users are available', function() {
        it('> Should contain users', function() {
            expect(usersPage.getUsersCount()).toBeGreaterThan(0);
        });

        it('> Should contain user "Pete Clodi" ', function() {
            usersPage.getUserByName('Pete Clodi').then(function(usersOfName) {
                expect(usersOfName.length).toBeGreaterThan(0);
            });
        });
    });

    it('> Edit the user "Pete Clodi" ', function() {
        usersPage.getUserByName('Pete Clodi').then(function(usersOfName) {
            (new UserRow(usersOfName[0])).clickEditLink().then(function() {
                var userPage = new UserPage();
                userPage.firstName('Peter John').then(function() {
                    userPage.commitUserValues().then(function() {
                        usersPage = new UsersPage();
                        usersPage.getUserByName('Peter John Clodi').then(function(usersOfName) {
                            expect(usersOfName.length).toBeGreaterThan(0);
                        });
                    });
                });
            });
        });
    });
});
