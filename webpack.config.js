var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
	  path: './build',
    filename: 'js/bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.ts', '.tsx', '.js']
  },
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }, 
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.png$/, loader: 'file?name=media/[hash].[ext]' },
      { test: /\.jpg$/, loader: 'file?name=media/[hash].[ext]' }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
}
