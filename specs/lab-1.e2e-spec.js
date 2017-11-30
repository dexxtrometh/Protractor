var util = require('../util/common.js'),
data = require('../data/lab-1.e2e-data.json'),

title = require('../po/common/title.js'),
mainMenu = require('../po/common/mainMenu.js'),
publicationTree = require('../po/specific/publication/publicationTree.js'),
button = require('../po/common/button.js'),

PublicationData = require('../po/specific/publication/publicationData.js'),
publicationData = new PublicationData();

describe('lab 1', function () {

    beforeAll(function () {
        util.loadPage();
    });
    
    it('should set title value by menu element', function () {
        mainMenu.open(data.productionsMenuSubElement);
        expect(title.title.getText()).toEqual(data.productionsMenuSubElement);
    });
    
    it('should set fields values after click on branch element', function () {
        publicationTree.selectBranchInnerNode(data.nodes);
        expect(publicationData.number.getAttribute('value')).toEqual(data.number);
        expect(publicationData.type.getAttribute('value')).toEqual(data.type);
        expect(publicationData.date.getAttribute('value')).toEqual(data.date);
        expect(publicationData.price.getAttribute('value')).toEqual(data.price);
    });
    
    it('should set fields new values after click on trees element, rollback', function () {
        publicationData.setValue(publicationData.number, data.testNumber);
        publicationData.setDropdownValueToUpper(publicationData.type, true);
        publicationData.setValue(publicationData.date, data.testDate);
        publicationData.setDropdownValueToUpper(publicationData.price, false);
        expect(publicationData.number.getAttribute('value')).toEqual(data.testNumber);
        expect(publicationData.type.getAttribute('value')).toEqual(data.testType);
        expect(publicationData.date.getAttribute('value')).toEqual(data.testDate);
        expect(publicationData.price.getAttribute('value')).toEqual(data.testPrice);

        button.cancelButton.click();
        expect(button.cancelMessage.isPresent()).toBe(true);
    });

    afterAll(function () {
        publicationTree.closeBranch(data.nodes);
    });
});