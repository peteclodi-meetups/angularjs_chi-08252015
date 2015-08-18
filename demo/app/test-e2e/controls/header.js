function Header() {
    var headerElement = element(by.tagName('header'));
    this.brandName = headerElement.element(by.binding('brandName'));
    var navButtons = headerElement.element.all(by.css('ng-transclude > a'));
    this.allUsersButton = navButtons.first();
    this.userButton = navButtons.last();

    this.getBrandNameText = function() {
        return this.brandName.getText();
    };

    this.goToUsersPage = function() {
        return this.allUsersButton.click();
    };

    this.goToUserPage = function() {
        return this.userButton.click();
    };
}

module.exports = Header;