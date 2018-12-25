Ext.define('UsersSandBox.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    updateUser: function (button) {
        var values = this.getFormValues(button),
            me = this;

        Ext.Ajax.request({
            url: '/api',
            method: 'post',
            jsonData: JSON.stringify(values),
            success: function (response) {
                me.gridRefresh();
            },
            failure: function (response) {
                var msg = Ext.decode(response.responseText).msg;
                alert(msg);
                me.gridRefresh();
            }
        });
    },

    deleteUser: function (button) {
        var values = this.getFormValues(button),
            me = this;

        Ext.Ajax.request({
            url: '/api',
            method: 'delete',
            jsonData: JSON.stringify(values),
            success: function (response) {
                me.gridRefresh();
            },
            failure: function (response) {
                me.gridRefresh();
            }
        });
    },

    searchUser: function (button) {
        var values = this.getFormValues(button),
            me = this;

        Ext.Ajax.request({
            url: '/api',
            method: 'get',
            params: values,
            success: function (response) {
                var record = Ext.decode(response.responseText);
                me.updateWindow('', Ext.create('UsersSandBox.model.User', record));
            },
            failure: function (response) {
                var msg = Ext.decode(response.responseText).msg;
                alert(msg);
                me.gridRefresh();
            }
        });
    },

    //signIn: function (button) {
    //    var me = this,
    //        panel = button.up('loginwindow'),
    //        form = panel.down('loginform'),
    //        values = form.getValues();
//
    //    Ext.Ajax.request({
    //        url: 'http://localhost:8080/login',
    //        method: 'post',
    //        params: values,
    //        success: function (response) {
    //            me.closeWindow(button);
    //        },
    //        failure: function (response) {
    //        }
    //    });
    //},

    //loginWindow: function () {
    //    var view = Ext.widget('loginwindow');
    //},

    searchWindow: function () {
        var view = Ext.widget('searchwindow');
    },

    createWindow: function () {
        var view = Ext.widget('usercreate');
    },

    updateWindow: function (grid, record) {
        var view = Ext.widget('userupdate');
        view.down('form').loadRecord(record);
    },

    getFormValues: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues();

        var record = form.getRecord();
        if (record) {
            values.id = record.get('id');
        }

        win.destroy();

        return values;
    },

    gridRefresh: function () {
        var store = Ext.getStore('userStore');
        store.load();
    },
    closeWindow: function (button) {
        button.up('window').destroy();
        this.gridRefresh();
    }
});
