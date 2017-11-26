/**
 * Created by yarivkatz on 26/11/2017.
 */


module.exports = {

    entry: './src/main.js',

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
        path: __dirname + '/dist'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'}
        ]
    }

}