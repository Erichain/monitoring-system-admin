const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'app.tsx'),
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:3333/',
  },

  devServer: {
    hot: true,
    inline: true,
    port: 3333,
    compress: false,
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['ts', 'tsx', 'js', 'css'],
  },

  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
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
      chunks: ['app'],
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:3333/',
    }),
  ],
};
