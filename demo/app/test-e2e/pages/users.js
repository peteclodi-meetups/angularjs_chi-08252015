var UserRow = require('../controls/user-row');

function UsersPage() {
    this.init = function() {
        this.users = element.all(by.repeater('user in users'));
    };

    this.get = function() {
        return browser.get('/');
    };

    this.getUsersCount = function() {
        return this.users.count();
    };

    this.getUserByName = function(name) {
        return this.users.filter(function(userRow) {
            return new UserRow(userRow).getName().then(function(text) {
                return text === name;
            });
        });
    };

    this.init();
}

module.exports = UsersPage;