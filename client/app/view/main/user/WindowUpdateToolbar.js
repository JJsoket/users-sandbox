Ext.define('UsersSandBox.view.main.user.WindowUpdateToolbar', {
    extend: 'UsersSandBox.view.main.user.WindowToolbar',
    xtype: 'exusertoolbar',

    initComponent: function () {
        this.callParent();

        this.add({
            xtype: 'button',
            text: 'Delete',
            iconCls: 'x-fa fa-trash',
            handler: 'deleteUser'
        });
    }
});

