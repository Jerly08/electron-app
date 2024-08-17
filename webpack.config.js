const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.ts', // Entry point untuk proses utama
    renderer: './src/renderer.tsx' // Entry point untuk proses renderer
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    filename: '[name].js', // Menghasilkan main.js dan renderer.js
    path: path.resolve(__dirname, 'dist')
  },
  target: 'electron-main', // Target untuk proses utama
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['renderer'] // Hanya menyertakan renderer.js di index.html
    })
  ]
};