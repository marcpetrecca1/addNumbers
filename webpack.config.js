const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        include: __dirname,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.join(__dirname, '/client/dist'),
    filename: 'bundle.js',
    pathinfo: false,
  },
  devtool: 'inline-source-map',
  plugins: [new ForkTsCheckerWebpackPlugin({ async: false })],
};
