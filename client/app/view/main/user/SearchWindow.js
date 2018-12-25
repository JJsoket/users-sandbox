Ext.define('UsersSandBox.view.main.user.SearchWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.searchwindow',

    requires: [
        'UsersSandBox.view.main.user.SearchCombobox',
        'Ext.Toolbar'
    ],

    title: 'Search User',

    iconCls: 'x-fa fa-search',

    autoShow: true,

    layout: 'fit',

    items: [{
        xtype: 'form',
        bodyPadding: 5,
        items: [{
            xtype: 'searchcombobox'
        }, {
            xtype: 'textfield',
            name: 'value',
            fieldLabel: 'Enter:'
        }]
    }],

    bbar: {
        xtype: 'toolbar',

        items: ['->', {
            xtype: 'button',
            text: 'Accept',
            iconCls: 'x-fa fa-check',
            handler: 'searchUser'
        }, {
            xtype: 'button',
            text: 'Cancel',
            iconCls: 'x-fa fa-close',
            handler: 'closeWindow'
        }]
    }
});