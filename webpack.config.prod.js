const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const yml = require('node-yaml');

const NODE_ENV = 'production';
const config = yml.readSync('config.yml');
const ENV = config[NODE_ENV];

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/js/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Buttfest 2016',
            template: 'my-index.ejs'
        }),
        /**
         * This plugin assigns the module and chunk ids by occurence count. What this
         * means is that frequently used IDs will get lower/shorter IDs - so they become
         * more predictable.
         */
        new webpack.optimize.OccurenceOrderPlugin(),
        /**
         * See description in 'webpack.config.dev' for more info.
         */
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV),
                API_HOST: JSON.stringify(ENV.apiHost)
            }
        }),
        /**
         * Some of you might recognize this! It minimizes all your JS output of chunks.
         * Loaders are switched into a minmizing mode. Obviously, you'd only want to run
         * your production code through this!
         */
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    }
};
