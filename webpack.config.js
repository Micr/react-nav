module.exports = {
  entry: './index.js',

  output: {
    path: './static',
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  devtool: 'eval',

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
