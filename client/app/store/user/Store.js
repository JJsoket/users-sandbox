Ext.define('UsersSandBox.store.user.Store', {
    extend: 'Ext.data.Store',
    model: 'UsersSandBox.model.User',

    alias: 'store.user',

    singleton: true,

    storeId: 'userStore',

    proxy: {
        url: '/api',
        type: 'ajax',

        reader: {
            rootProperty: 'users',
            type: 'json'
        }
    },
    autoLoad: true
});