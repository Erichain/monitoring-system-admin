const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const publicConfig = require('./webpack.public.config');

module.exports = {
  entry: publicConfig.entry,

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: `http://${process.env.LOCAL_IP}:3333/`,
  },

  resolve: publicConfig.resolve,

  devtool: 'cheap-module-source-map',

  module: publicConfig.module,

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js',
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      Tether: 'tether',
    }),
    new HtmlWebpackPlugin({
      title: 'App',
      template: 'src/index.html',
      inject: 'body',
      chunks: ['common', 'app'],
    }),
    new OpenBrowserPlugin({
      url: `http://${process.env.LOCAL_IP}:3333`,
    }),
  ],
};
