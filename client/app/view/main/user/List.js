Ext.define('UsersSandBox.view.main.user.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.ulist',
    xtype: 'userlist',

    requires: [
        'UsersSandBox.store.user.Store'
    ],

    bind: {
        store: '{store}'
    },

    columns: [
        {text: 'Id', dataIndex: 'id', flex: 0, align: 'left'},
        {text: 'Username', dataIndex: 'username', flex: 1, align: 'right'},
        {text: 'Email', dataIndex: 'email', flex: 1, align: 'right'},
        {text: 'Password', dataIndex: 'password', flex: 1, align: 'right'}
    ],
    listeners: {
        itemdblclick: 'updateWindow'
    }
});