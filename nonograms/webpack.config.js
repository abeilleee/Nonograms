const { extension } = require('mime-types');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'assets/images/[name][ext]',
    },
    stats: {
        children: true
    },
    mode: 'development',
    optimization: {
        minimize: false
    },
    plugins: [new MiniCssExtractPlugin({
        filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html',
    })],
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'], //add first 'style-loader' to not separate css file after build
            },
            {
                test: /\.(mp3|ogg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/audio/[name][ext]',
                }
            },
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