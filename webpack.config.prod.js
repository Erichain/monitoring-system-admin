const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const manifest = require('./dll/vendor-manifest.json');
const HappyPack = require('happypack');

const happyPackPlugins = [
  new HappyPack({
    id: 'ts',
    threads: 4,
    loaders: ['ts-loader'],
  }),

  new HappyPack({
    id: 'styles',
    threads: 4,
    loaders: [
      ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
      }),
    ],
  }),
];

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'app.js'),
  },

  output: {
    path: path.join(__dirname, 'dist-[hash]'),
    filename: '[name].[hash].js',
  },

  resolve: {
    extensions: ['ts', 'tsx', 'js'],
    modules: ['node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        exclude: /node_modules/,
        use: ['happypack/loader?id=ts'],
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['happypack/loader?id=styles'],
      }, {
        test: /\.(jpe?g|png|gif|svg)$/,
        exclude: /node_modules/,
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
  ].concat(happyPackPlugins),
};
