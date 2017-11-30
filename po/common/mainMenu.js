module.exports = new MainMenu();

var util = require('../../util/common.js');

function MainMenu() {
    var that = this;

    /**
     * Кликает по элементу после ожидания прорисовки
     * @param {string} menuText - текст элемента меню
     * @returns {Promise.<void>}
     */
    that.open = function (menuText) {
        return util.waitVisibilityAndClick(element(by.partialLinkText(menuText)));
    }
}