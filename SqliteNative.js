Ext.define('Mba.ux.SqlNative', {
    extend: 'Mba.ux.Sql',
    alias: 'proxy.sql-native',
    xtype: 'sqlnative',

    config: {
        location: 2,
        importDBPrepoulate: false
    },

    getDatabaseObject: function()
    {
        if (!window.sqlitePlugin) {
            console.log('Run WebSQL');
            return openDatabase(this.getDatabase(), '1.0', 'Sencha Database', 5 * 1024 * 1024);
        }

        console.log('Run Sqlite');
        return window.sqlitePlugin.openDatabase({
            name: this.getDatabase(),
            createFromResource: this.getImportDBPrepoulate(),
            location: this.getLocation()
        });
    }
});
