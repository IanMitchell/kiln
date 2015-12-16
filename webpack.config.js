const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index.jsx',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BROWSER: JSON.stringify(true),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass!postcss-loader?syntax=postcss-scss',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: [
            [
              'react-transform',
              {
                'transforms': [
                  {
                    'transform': 'react-transform-hmr',
                    'imports': ['react'],
                    'locals': ['module'],
                  },
                  {
                    'transform': 'react-transform-catch-errors',
                    'imports': ['react', 'redbox-react'],
                  },
                ],
              },
            ],
          ],
        },
      },
    ],
  },
  postcss: () => {
    return [require('autoprefixer')];
  },
};
