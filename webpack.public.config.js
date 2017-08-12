const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'App.tsx'),
  },

  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
    extensions: ['.ts', '.tsx', '.js', '.scss', '.css', '*'],
  },

  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'postcss-loader',
          'sass-loader',
        ],
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
  }
};
