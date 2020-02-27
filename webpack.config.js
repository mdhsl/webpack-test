const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Caching',
        }),
    ],
    devServer: {
        contentBase: './dist',
        publicPath: '/',
        hot: true,
    },
    devtool: 'inline-source-map',
    output: {
        filename: mode === 'production' ? '[name].[contenthash].js' : '[name].[hash].js',
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