const path = require('path');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

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
        use: ['babel-loader'] 
        // use: ['react-hot-loader/webpack', 'babel-loader'] 
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
    hot: true,
    index: 'app.html',
    // port: 3000,
    // quiet: false,
    // publicPath: '/dist',
    // open: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
       template: path.resolve( __dirname, 'dist/app.html' ),
       filename: 'app.html',
       inject: false 
    })
 ]
};