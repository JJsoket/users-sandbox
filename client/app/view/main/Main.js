Ext.define('UsersSandBox.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    layout: 'fit',

    requires: [
        'Ext.window.MessageBox',

        'UsersSandBox.view.main.MainController',
        'UsersSandBox.view.main.MainModel',

        'UsersSandBox.view.main.user.Panel'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        bodyPadding: '5 20 5 5',
        autoScroll: true
    },

    items: [
        {
            xtype: 'userpanel'
        }]
});
