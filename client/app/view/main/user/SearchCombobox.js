Ext.define('UsersSandBox.view.main.user.SearchCombobox', {
    extend: 'Ext.form.ComboBox',

    xtype: 'searchcombobox',

    fieldLabel: 'Search by:',

    editable: false,

    store: {
        fields: ['field'],
        data: [
            {'field': 'username'},
            {'field': 'email'}
        ]
    },

    name: 'field',

    displayField: 'field',

    valueField: 'field',

    initComponent: function () {
        this.callParent();
        this.setValue(this.store.getAt('0').get('field'));
    }
});