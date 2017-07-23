const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const manifest = require('./dll/vendor-manifest.json');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'App.tsx'),
  },

  output: {
    path: path.join(__dirname, 'dist-[hash]'),
    filename: '[name].[hash].js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
        }),
      }, {
        test: /\.(jpe?g|png|gif|svg)$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      },
    ],
  },

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
  ],
};
