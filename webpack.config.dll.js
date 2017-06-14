const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [path.join(__dirname, 'src', 'vendor.js')],
  },

  output: {
    path: path.join(__dirname, 'dist-[hash]'),
    filename: '[name].[hash].js',
    library: '[name]',
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      filename: '[name].[hash].js',
      name: '[name]',
    }),
  ],
};
