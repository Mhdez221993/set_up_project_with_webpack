const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html',
    }),
  ],
   output: {
     filename: 'dist/index.html',
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   devServer: {
    contentBase: './dist',
  },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
 };
