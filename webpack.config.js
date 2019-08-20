const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: ['./src/server.js'],
    watch: true,
    target: 'node',
    module: {
        rules: [
            {
                test: /.(jsx|js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    mode: 'none',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'server.js',
    },
};
