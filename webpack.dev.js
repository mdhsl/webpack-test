const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        publicPath: '/',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                use: {
                    loader: 'worker-loader',
                    options: {publicPath: '/osh/workers/'}
                }
            }
        ]
    },
});