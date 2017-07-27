const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [path.join(__dirname, 'src', 'vendor.ts')],
  },

  output: {
    path: path.join(__dirname, 'dist-dll'),
    filename: '[name].dll.js',
    library: '[name]',
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      filename: '[name].dll.js',
      name: '[name]',
    }),
  ],
};
