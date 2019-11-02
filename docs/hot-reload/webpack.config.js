const path = require('path');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

// https://webpack.js.org/configuration/dev-server/

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: 'app.js'
  },
  resolve: {
    extensions: [".jsx",".js"],
    // alias: {
    //   'react-dom': '@hot-loader/react-dom'
    // }
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader'] 
      }
    ]
  },
  // watch: true,
  // watchOptions: {
  //   aggregateTimeout: 10000,
  //   ignored: /node_modules/,
  //   poll: 5000
  // },
  devServer: {
    contentBase: "./dist",
    allowedHosts: ['localhost'],
    port: 3000,
    // quiet: false,
    // publicPath: '/dist',
    // open: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
       template: path.resolve( __dirname, 'dist/index.html' ),
       filename: 'index.html',
       inject: false 
    })
 ]
};