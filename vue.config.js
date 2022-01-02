module.exports = {
    devServer: {
        https: true
    },
    // ...other vue-cli plugin options...
    pwa: {
        name: 'Fronteiras',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        // workboxPluginMode: 'InjectManifest',
        // workboxOptions: {
        //     // swSrc is required in InjectManifest mode.
        //     swSrc: 'dev/sw.js',
        //     // ...other Workbox options...
        // }
    }
}
