/**
 * Created by yarivkatz on 26/11/2017.
 */


module.exports = {

    entry: './main.js',

    // entry: {
    //     'app': './main.js',
    //     'vendor': './vendor.js'
    // },

    // output: {
    //     path: __dirname,
    //     filename: [name].[hash].js
    // }

    output: {
        filename: 'app.js',
        path: __dirname
    },

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'}
        ]
    }

}