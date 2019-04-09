const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    // hot: true
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({
      title: 'tree-shaking'
    })
  ]
};
