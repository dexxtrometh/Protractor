"use strict";

module.exports = new AssignmentData();

function AssignmentData() {
    var that = this;

    that.cancelButton = $('.fa-undo');
    that.plusButton = $('.btn-toolbar').$('.glyphicon-plus');

    that.eshopNumber = element(by.cssContainingText('.row.smallspacer.col-def', 'EShop-Nr.')).$('.input-sm.form-control');
}