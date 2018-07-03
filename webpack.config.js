const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // file with the application
  output: {
    path: path.join (__dirname, '/dist'), // the output folder with js transpiled
    filename: 'index.bundle.js',
  },
  // Modules Section with the rules for the files (JS, JSX, TS or TSX)
  // the rule section is an regex to verify the file extension
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // Plugin section: to set some plugin that we will use
  plugins: [
    new HtmlWebpackPlugin ({
      template: './src/index.html',
    }),
  ],
};
