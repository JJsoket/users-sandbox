Ext.define('UsersSandBox.view.main.user.Window', {
    extend: 'Ext.window.Window',

    layout: 'fit',

    autoShow: true,

    items: {
        xtype: 'form',
        bodyPadding: 5,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Username',
            name: 'username'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Password',
            name: 'password'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Email',
            name: 'email'
        }]
    }
});