const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const baseConfig = require('./webpack.config.base')
const path = require('path')
const WebpackBar = require('webpackbar')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    static: {
      // directory: path.join(__dirname, '../public'),
      publicPath: 'http://localhost:9000/',
    },
    compress: true,
    hot: true,
    port: 9000,
  },
  target: 'web',
  node: {
    __dirname: false,
    __filename: false,
  },
  cache: {
    // 磁盘存储
    type: 'filesystem',
    buildDependencies: {
      // 当配置修改时，缓存失效
      config: [__filename],
    },
  },
  module: {
    rules: [
      {
        test: /\.(less)$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'style-loader',
            options: {
              esModule: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: '[local]__[hash:base64:5]',
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new ReactRefreshWebpackPlugin(),
    new WebpackBar({ name: '渲染进程' }),
  ],
  optimization: {
    runtimeChunk: true,
  },
})
