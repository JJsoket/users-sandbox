/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('UsersSandBox.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'UsersSandBox',

		store: {
            type: 'user'
        }
    }

});
