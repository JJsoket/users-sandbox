Ext.define('UsersSandBox.view.main.user.WindowToolbar', {
    extend: 'Ext.Toolbar',
    xtype: 'usertoolbar',

    items: ['->', {
        xtype: 'button',
        text: 'Submit',
        iconCls: 'x-fa fa-check',
        handler: 'updateUser'
    }, {
        xtype: 'button',
        text: 'Cancel',
        iconCls: 'x-fa fa-close',
        handler: 'closeWindow'
    }]
});