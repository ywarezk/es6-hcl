/**
 * Created by yarivkatz on 20/11/2017.
 */


var path = require('path');

module.exports = {

    entry: './main.ts',

    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        loaders: [

            {test: /\.ts$/, loader: 'ts-loader'},
            {test: /\.js$/, loader: 'babel-loader'},
            // {test: /\.css$/, loader: 'ts-loader'},
            // {test: /\.js$/, loader: 'ts-loader'}

        ]
    },

    devtool: 'source-map',

    plugins: [

    ]

}