const ExtractTextPlugin =  require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    }, {
      test: /\.scss$/,
      loaders: ExtractTextPlugin.extract('css-loader!sass-loader')
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'main.css',
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000
  }
};