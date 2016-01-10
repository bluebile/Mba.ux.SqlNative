Ext.define('Mba.ux.SqlNative', {
    extend: 'Mba.ux.Sql',
    alias: 'proxy.sql-native',
    xtype: 'sqlnative',

    mixins: [
        'Mba.ux.BuilderConfig.mixin.BuilderConfig'
    ],

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
            createFromLocation: (new Number(this.getImportDBPrepoulate())).valueOf(),
            location: this.getLocation(),
            androidDatabaseImplementation: 2
        });
    }
});
