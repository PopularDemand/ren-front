const ExtractTextPlugin =  require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      loaders: ExtractTextPlugin.extract('css-loader!sass-loader')
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'main.css',
      allChunks: true
    })
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
    port: 3000
  }
};