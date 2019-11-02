const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

// https://webpack.js.org/configuration/dev-server/

module.exports = {
  entry: [ path.resolve(__dirname, 'src/index.jsx')],
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader'] 
      }
    ]
  },
  resolve: {
    extensions: [".jsx",".js"]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "dist",
    filename: 'app.js'
  },
  devServer: {
    contentBase:  '/dist',
    inline: true,
    allowedHosts: ['localhost'],
    port: 3000,
    hot: true,
    disableHostCheck: true
  },
  plugins: [
    new HtmlWebPackPlugin({
       template: path.resolve( __dirname, 'dist/index.html' ),
       inject: true,
       filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
 ],

};