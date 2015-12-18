var HtmlWebpackPlugin = require('html-webpack-plugin');

var template = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=900">
    <title>Debdatta Basu</title>
    <base href="/">
  </head>
  <body>
    <script src="js/bundle.js"></script>
  </body>
</html>
`;

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
  plugins: [new HtmlWebpackPlugin({templateContent: template})],
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
