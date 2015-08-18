function UserRow(userRowElement) {
    var mainElement = userRowElement;
    this.checkbox = mainElement.element(by.model('user.selected'));
    this.name = mainElement.element(by.binding('user | FullName'));
    this.awesomeQuestion = mainElement.element(by.binding('user.isAwesome'));
    this.editLink = mainElement.element(by.linkText('edit'));

    this.selectUser = function() {
        return this.checkbox.click();
    };

    this.getName = function() {
        return this.name.getText();
    };

    this.awesomenessQuestion = function() {
        return this.awesomeQuestion.getText();
    };

    this.clickEditLink = function() {
        return this.editLink.click();
    };
}

module.exports = UserRow;