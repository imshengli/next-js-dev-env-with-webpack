const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// console.log(Object.keys(process.env));

module.exports = env => {
  // Use env.<YOUR VARIABLE> here:
  // console.log('NODE_ENV: ', env.NODE_ENV) // 'local'
  // console.log('Production: ', env.production) // true
  const ASSET_PATH = process.env.ASSET_PATH || '';
  // console.log('ASSET_PATH: ', ASSET_PATH);
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      // publicPath: ASSET_PATH
      publicPath: '',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'public-path'
      }),
      // 该插件帮助我们安心地使用环境变量
      // new webpack.DefinePlugin({
      //   'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
      // })
    ]
  };
};
