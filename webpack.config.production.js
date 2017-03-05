var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'build', 'public');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const config = {
    context: srcPath,
    entry: path.join(srcPath, 'client', 'client.js'),
    devtool: false,
    output: {
        path: buildPath,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
/*                query: {
                    presets: ['react', 'es2015','stage-0']
                }*/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            },
            minimize: true
        })
    ],
    resolve: {
        root: __dirname
    }
};

const serverConfig={
    name: 'server',
    target: 'node',
    devtool: false,
    externals: [nodeExternals()],
    entry: [
        path.join(srcPath, 'server', 'server.js'),
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'server.js',
        publicPath: 'build/',
        libraryTarget: 'commonjs2'
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'null'
            },
            {
                test: /\.scss$/,
                loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]__[local]'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            },
            minimize: true
        })
    ],
    resolve: {
        root: __dirname
    }
};

module.exports = [config, serverConfig];