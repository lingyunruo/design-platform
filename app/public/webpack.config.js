
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        'index': path.join(__dirname, './src/main/index.js')
    },
    output: {
        path: path.join(__dirname, './static'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        chunkFilename: '[name].js'
    },
    devtool: 'cheap-module-source-map',
    externals: {    
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: [
                        'transform-class-properties'
                    ]
                }
            }
        }, {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }, {
            test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
            exclude: /favicon\.png$/,
            use: [{
                loader: 'url-loader'
            }]
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'less-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
};