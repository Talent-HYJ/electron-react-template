const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const path = require('path');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(baseConfig, {
  mode: 'production',
  performance: {
    hints: false
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(less)$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: '[local]__[hash:base64:5]'
              }
            }
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ]
      },
    ]
  },
  target: 'web',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '../.env.production')
    }),
    new WebpackBar({ name: '渲染进程' }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          to: '',
          filter: async (resourcePath) => {
            if (resourcePath.lastIndexOf('index.html') !== -1) {
              return false;
            }
            return true;
          }
        }
      ]
    }),

    new CleanWebpackPlugin({
      dry: false,
      cleanOnceBeforeBuildPatterns: ['../build', '../package'],
      dangerouslyAllowCleanPatternsOutsideProject: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
      chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css', // chunk css file
      ignoreOrder: true
    }),
    new webpack.IgnorePlugin({
      resourceRegExp: new RegExp('^(fs|ipc|path)$')
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      minSize: 10,
      minChunks: 1,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    emitOnErrors: false
  }
});
