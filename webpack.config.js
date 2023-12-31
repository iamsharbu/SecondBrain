const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.config();
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // where to start resolving dependency graph
  output: {
    path: path.join(__dirname, '/dist'), // folder to put bundle.js to
    filename: 'bundle.js', // single file where all js files bundled
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html', // tells webpack to inject bundle.js into this html
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),

  ],
  module: { // pass rules to tell loader on how to form bundles using modules
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
};
