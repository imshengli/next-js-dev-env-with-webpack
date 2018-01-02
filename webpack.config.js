const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const webpackMultiEntryResolve = require('webpack-multi-entry-resolve');
const root = path.resolve(__dirname);

const webpackConfig = {
    entry: {},
    output: {
        path: path.join(root, 'dist'),
        publicPath: '',
        filename: 'js/[name].js',
        chunkFilename: 'js/chunk/[id].chunk.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: []
};

webpackMultiEntryResolve(webpackConfig, {
    root: root,
    path: path.join(root, 'src'),
    globs: '**/*.js'
});

module.exports = webpackConfig;
