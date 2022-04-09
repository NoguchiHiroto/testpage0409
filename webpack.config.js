import { WordpressShortcodeWebpackPlugin } from 'wordpress-shortcode-webpack-plugin';

const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    frontend: './frontend/src/index.js',
    backend: './backend/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name]_bundle.js'
  },
  target: 'node',
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader:  "babel-loader",
        }
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [{loader: "html-loader"}]
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html',
    }),
    new WordpressShortcodeWebpackPlugin({
      wordpressPluginName: 'my-awesome-plugin',
      headerFields: {
          author: 'Tom Lagier',
          description: 'An awesome plugin that does many cool things',
          version: '1.0.0'
      }
    }),

  ],
}