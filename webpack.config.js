const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader?name=[path][name].[ext]!extract-loader!html-loader'},
      // {
      //   test: /\.(jpe?g|png)$/,
      //   use: {
      //     loader: "url-loader",
      //     options: {
      //       limit: 25000,
      //     },
      //   },
      // }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

module.exports = config;