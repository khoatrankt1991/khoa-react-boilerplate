const merge = require('webpack-merge');
const common = require('./common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  optimization: {
    usedExports: true
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
