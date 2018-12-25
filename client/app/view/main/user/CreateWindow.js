Ext.define('UsersSandBox.view.main.user.CreateWindow', {
    extend: 'UsersSandBox.view.main.user.Window',
    alias: 'widget.usercreate',

    title: 'Create user',

    bbar: {
        xtype: 'usertoolbar'
    }
});