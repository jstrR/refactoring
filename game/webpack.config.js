const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist',
      hot: true
  },
   module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       }
      ]
    },
    plugins: [
     new webpack.NamedModulesPlugin(),
     new webpack.HotModuleReplacementPlugin()
  ],
    output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};