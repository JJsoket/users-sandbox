Ext.define('UsersSandBox.view.main.user.Panel', {
    extend: 'Ext.Panel',

    xtype: 'userpanel',

    bind: {
        title: '{name}'
    },

    items: [{
        xtype: 'panel',
        items: [{xtype: 'userlist'}]
    }],

    tbar: {
        xtype: 'toolbar',
        items: [{
            text: 'New',
            iconCls: 'x-fa fa-file',
            handler: 'createWindow'
        }, {
            text: 'Search',
            iconCls: 'x-fa fa-search',
            handler: 'searchWindow'
        }, '->', {
            text: 'Refresh',
            iconCls: 'x-fa fa-refresh',
            handler: 'gridRefresh'
        }]
    }
});