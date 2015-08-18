function UsersPage() {
    this.init = function() {
        this.firstNameInput = element(by.model('UserCtrl.user.firstName'));
        this.lastNameInput = element(by.model('UserCtrl.user.lastName'));
        this.awesomenesses = element.all(by.model('UserCtrl.user.isAwesome'));
        this.userActionButton = element(by.partialButtonText('User'));
    };

    this.get = function() {
        return browser.get('/user');
    };

    this.firstName = function(firstName) {
        if(firstName) {
            return this.firstNameInput.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"), firstName);
        }
        return this.firstNameInput.getAttribute('value');
    };

    this.lastName = function(lastName) {
        if(lastName) {
            return this.lastNameInput.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"), lastName);
        }
        return this.lastNameInput.getAttribute('value');
    };

    this.awesomeness = function(isAwesome) {
        if(isAwesome === null || isAwesome === undefined) {
            return this.awesomenesses.first().isSelected();
        }
        return isAwesome ? this.awesomenesses.first().click() : this.awesomenesses.last().click();
    };

    this.commitUserValues = function() {
        return this.userActionButton.click();
    };

    this.init();
}

module.exports = UsersPage;