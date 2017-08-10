const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const manifest = require('./dll/vendor-manifest.json');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const publicConfig = require('./webpack.public.config');

module.exports = {
  entry: publicConfig.entry,

  output: {
    path: path.join(__dirname, 'dist-[hash]'),
    filename: '[name].[hash].js',
  },

  resolve: publicConfig.resolve,

  module: publicConfig.module,

  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      template: 'src/index.html',
      chunks: ['app'],
    }),
    new webpack.DllReferencePlugin({
      manifest,
    }),
    new CopyWebpackPlugin([{
      from: 'dist-dll/vendor.dll.js',
      to: '.',
    }]),
    new HtmlWebpackIncludeAssetsPlugin({
      files: ['index.html'],
      assets: ['vendor.dll.js'],
      append: false,
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      Tether: 'tether',
    }),
  ],
};
