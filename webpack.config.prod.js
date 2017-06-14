const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const manifest = require('./dll/vendor-manifest.json');

module.exports = {
  entry: {
    app: [path.join(__dirname, 'src', 'app.js')],
    vendor: [path.join(__dirname, 'src', 'vendor.js')],
  },

  output: {
    path: path.join(__dirname, 'dist-[hash]'),
    filename: '[name].[hash].js',
  },

  resolve: {
    extensions: ['ts', 'tsx', 'js'],
  },

  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        loader: ['ts-loader'],
      }, {
        test: /\.scss$/,
        loader: [
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
          })
        ],
      }, {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
          }
        }]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      chunks: ['app'],
    }),

    new webpack.DllReferencePlugin({
      manifest,
    })
  ],
};
