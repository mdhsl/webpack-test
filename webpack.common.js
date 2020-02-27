const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'OSH',
        }),
        new CopyWebpackPlugin([
            {from:'libs',to:'libs'}
        ]),

],
    output: {
        filename: process.env.NODE_ENV  === 'production' ? '[name].[contenthash].js' : '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
        runtimeChunk: 'single',
        moduleIds: 'hashed',
    },
};