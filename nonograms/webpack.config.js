const { extension } = require('mime-types');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/[name][ext]',
    },
    mode: 'development',
    optimization: {
        minimize: false
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].css',
    })],
    module: {
        rules: [
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'], //add first 'style-loader' to not separate css file after build
            }
        ],
    },
    resolve: {
        extensions: ['.js']
    },
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 9000,
    },
};